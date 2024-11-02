/*
 * Introduction to Web technologies (with Java support)
 * 
 * https://github.com/egalli64/web-intro
 */
package com.example.jet;

import java.io.File;

import org.eclipse.jetty.ee10.servlet.DefaultServlet;
import org.eclipse.jetty.ee10.servlet.ServletContextHandler;
import org.eclipse.jetty.ee10.servlet.ServletHolder;
import org.eclipse.jetty.server.Server;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.example.jet.servlet.Hello;
import com.example.jet.servlet.Echo;

/**
 * Start the Jetty server
 */
public class ServerStartup {
    private static final int PORT = 8080;
    private static final Logger log = LoggerFactory.getLogger(ServerStartup.class);

    /**
     * Let Jetty serve the public folder and a couple of basic servlet
     * 
     * @param args not used
     */
    public static void main(String[] args) {
        Server server = new Server(PORT);
        ServletContextHandler context = new ServletContextHandler(ServletContextHandler.SESSIONS);
        context.setContextPath("/");
        server.setHandler(context);

        // static resources
        ServletHolder staticSrv = new ServletHolder("static", DefaultServlet.class);
        staticSrv.setInitParameter("baseResource", new File("public").getAbsolutePath());
        context.addServlet(staticSrv, "/");

        // dynamic resources
        context.addServlet(new ServletHolder(new Hello()), "/hello");
        context.addServlet(new ServletHolder(new Echo()), "/test");

        try {
            server.start();
            log.info("Jetty started at http://localhost:" + PORT);
            server.join();
        } catch (InterruptedException ex) {
            log.error("Can't correctly join the server", ex);
        } catch (Exception ex) {
            log.error("Can't start the server up", ex);
        }
    }
}
