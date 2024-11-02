/*
 * Introduction to Web technologies (with Java support)
 * 
 * https://github.com/egalli64/jaoo
 */
package com.example.jet.servlet;

import java.io.IOException;

import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * A hello servlet
 */
public class Hello extends HttpServlet {
    private static final long serialVersionUID = -4698196882102249886L;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        resp.setContentType("text/html");
        resp.getWriter().println("<h1>Hello!</h1>");
    }
}