import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Box, Flex, Button } from "@chakra-ui/react";
import { IoMdMenu } from "react-icons/io";

import {
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuSeparator,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";

const Layout = () => {
  const location = useLocation();

  return (
    <Flex direction="column" minH="100vh">
      {/* Header */}
      <Box
        as="header"
        bg="#1e1e2f"
        color="white"
        py="1rem"
        px="2rem"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="1000"
      >
        <h1>Meenakshi Tripathi</h1>

        {/* Desktop Navigation */}
        <Flex display={{ base: "none", md: "flex" }} gap="4rem">
          {[
            { name: "Home", path: "/" },
            { name: "Publications", path: "/publications" },
            { name: "Projects", path: "/researchprojects" },
            { name: "About Me", path: "/about" },
          ].map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              style={{
                textDecoration: "none",
                color: location.pathname === path ? "#f39c12" : "#ffffff",
                fontWeight: "bold",
                transition: "color 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#f39c12")}
              onMouseLeave={(e) =>
                (e.target.style.color =
                  location.pathname === path ? "#f39c12" : "#ffffff")
              }
            >
              {name}
            </Link>
          ))}
        </Flex>

        {/* Hamburger Menu for Small Screens */}
        <Box display={{ base: "block", md: "none" }}>
          <MenuRoot>
            <MenuTrigger asChild>
              <Button variant="ghost" cursor="pointer">
                <IoMdMenu size="1.8rem" color="white" />
              </Button>
            </MenuTrigger>
            <MenuContent>
              <MenuItemGroup title="Menu">
                {[
                  { name: "Home", path: "/" },
                  { name: "Publications", path: "/publications" },
                  { name: "Projects", path: "/researchprojects" },
                  { name: "About Me", path: "/about" },
                ].map(({ name, path }) => (
                  <MenuItem
                    key={name}
                    onClick={() => (window.location.href = path)}
                    _hover={{ bg: "#f39c12", color: "white" }}
                    cursor="pointer"
                  >
                    {name}
                  </MenuItem>
                ))}
              </MenuItemGroup>
              <MenuSeparator />
            </MenuContent>
          </MenuRoot>
        </Box>
      </Box>

      {/* Main Content */}
      <Box as="main" flex="1" pt="5rem" px="2rem" bg="#f5f5f5" overflowY="auto">
        <Outlet />
      </Box>

      {/* Footer */}
      <Box as="footer" bg="#1e1e2f" color="white" textAlign="center" py="1rem">
        <p>© 2025 Meenakshi Tripathi</p>
      </Box>
    </Flex>
  );
};

export default Layout;
