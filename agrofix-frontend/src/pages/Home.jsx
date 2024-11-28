// import React from "react";
// import { Link } from "react-router-dom";



// const Home = () => (
//     <div>
//         <h1>Welcome to Agrofix</h1>
//         <nav>
//             <Link to="/catalogue">View Products</Link>
//             <Link to="/order">Place Order</Link>
//             <Link to="/track">Track Order</Link>
//         </nav>
//     </div>
// );

// export default Home;


import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const containerStyle = {
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#007bff", 
        color: "white",
        padding: "50px",
        borderRadius: "10px",
        margin: "50px auto",
        maxWidth: "2000px",
    };

    const titleStyle = {
        fontSize: "2.5rem",
        marginBottom: "20px",
    };

    const navStyle = {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
    };

    const linkStyle = {
        textDecoration: "none",
        color: "#ffffff",
        fontSize: "1.2rem",
        border: "2px solid #ffffff",
        padding: "10px 20px",
        borderRadius: "5px",
        transition: "background-color 0.3s, color 0.3s",
    };

    const linkHoverStyle = {
        backgroundColor: "#ffffff",
        color: "#007bff",
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Welcome to Agrofix</h1>
            <nav style={navStyle}>
                <Link
                    to="/catalogue"
                    style={linkStyle}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#ffffff", e.target.style.color = "#007bff")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent", e.target.style.color = "#ffffff")}
                >
                    View Products
                </Link>
                <Link
                    to="/order"
                    style={linkStyle}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#ffffff", e.target.style.color = "#007bff")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent", e.target.style.color = "#ffffff")}
                >
                    Place Order
                </Link>
                <Link
                    to="/track"
                    style={linkStyle}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#ffffff", e.target.style.color = "#007bff")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent", e.target.style.color = "#ffffff")}
                >
                    Track Order
                </Link>
            </nav>
        </div>
    );
};

export default Home;



// import React from "react";
// import { Link } from "react-router-dom";
// import { Box, Heading, Flex, Button } from "@chakra-ui/react";

// const Home = () => (
//     <Box 
//         textAlign="center" 
//         bg="blue.500" 
//         p={10} 
//         borderRadius="md" 
//         color="white" 
//         maxW="600px" 
//         mx="auto" 
//         mt={10}
//     >
//         <Heading as="h1" size="xl" mb={6}>
//             Welcome to Agrofix
//         </Heading>
//         <Flex justify="center" gap={6}>
//             <Button as={Link} to="/catalogue" colorScheme="whiteAlpha" variant="outline">
//                 View Products
//             </Button>
//             <Button as={Link} to="/order" colorScheme="whiteAlpha" variant="outline">
//                 Place Order
//             </Button>
//             <Button as={Link} to="/track" colorScheme="whiteAlpha" variant="outline">
//                 Track Order
//             </Button>
//         </Flex>
//     </Box>
// );

// export default Home;

