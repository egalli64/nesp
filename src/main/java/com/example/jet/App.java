package com.example.jet;

import java.io.File;

import org.eclipse.jetty.ee10.servlet.DefaultServlet;
import org.eclipse.jetty.ee10.servlet.ServletContextHandler;
import org.eclipse.jetty.ee10.servlet.ServletHolder;
import org.eclipse.jetty.server.Server;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.example.jet.servlet.Hello;
import com.example.jet.servlet.Test;

public class App {
    private static final int PORT = 8080;
    private static final Logger log = LoggerFactory.getLogger(App.class);

    public static void main(String[] args) throws Exception {
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
        context.addServlet(new ServletHolder(new Test()), "/test");

        server.start();
        log.info("Jetty started at http://localhost:" + PORT);
        server.join();
    }
}
