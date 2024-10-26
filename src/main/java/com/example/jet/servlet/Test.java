package com.example.jet.servlet;

import java.io.IOException;
import java.util.Enumeration;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class Test extends HttpServlet {
    private static final long serialVersionUID = 4190906381967108924L;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        resp.setContentType("text/html");

        Enumeration<String> names = req.getParameterNames();
        StringBuilder result = new StringBuilder("<h1>Parameters</h1>\n");
        result.append("<ul>\n");

        while (names.hasMoreElements()) {
            String name = names.nextElement();
            String value = req.getParameter(name);
            result.append(String.format("<li>%s: %s</li>\n", name, value));
        }
        result.append("</ul>\n");

        resp.getWriter().println(result);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
