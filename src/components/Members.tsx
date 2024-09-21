import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
  Avatar,
  Box,
} from "@mui/material";
import { LinkedIn, Instagram, GitHub } from "@mui/icons-material";

// Define the interface for the social media links
interface SocialLinks {
  behance?: string;
  instagram?: string;
  linkedin?: string;
  github?: string;
}

// Define the interface for each team member
interface Member {
  name: string;
  title: string;
  quote: string;
  image: string;
  social: SocialLinks;
}

// Sample data for team members
const members: Member[] = [
  // Your sample data here
  {
    name: "Arnav Verma",
    title: "PRESIDENT",
    quote: "dog complex",
    image: "/members_photo/1.png",
    social: { behance: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Pranjal Solanki",
    title: "VICE PRESIDENT",
    quote: "jee grind",
    image: "/members_photo/2.png",
    social: { behance: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Aatharv Kwatra",
    title: "HARDWARE HEAD",
    quote: "Your Average Human",
    image: "/members_photo/3.png",
    social: { instagram: "#" },
  },
  {
    name: "Jyotsna Arora",
    title: "CREATIVE HEAD",
    quote: "running as fast as I can",
    image: "/members_photo/4.png",
    social: { behance: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Krishnuv Tarun Khattar",
    title: "MEMBER",
    quote: "heavy cryptic hunting",
    image: "/members_photo/5.png",
    social: { behance: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Atreyi Shukla",
    title: "MEMBER",
    quote: "psych ward patient number one",
    image: "/members_photo/6.png",
    social: { behance: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Prisha Basak",
    title: "MEMBER",
    quote: "'lil' biscuit🍪✨",
    image: "/members_photo/7.png",
    social: { behance: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Arnav Katyal",
    title: "MEMBER",
    quote: "donatachild",
    image: "/members_photo/8.png",
    social: { instagram: "#", linkedin: "#" },
  },
  {
    name: "Urvaksh Sachdeva",
    title: "MEMBER",
    quote: "skibidi",
    image: "/members_photo/9.png",
    social: { behance: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Ashni Ahlawat",
    title: "MEMBER",
    quote: "iterating within the learning loop",
    image: "/members_photo/10.png",
    social: { behance: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Digvijay Gupta",
    title: "MEMBER",
    quote: "jatt don't care",
    image: "/members_photo/11.png",
    social: { behance: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Vibhas Tiwari",
    title: "MEMBER",
    quote: "god's plan",
    image: "/members_photo/12.png",
    social: { behance: "#", instagram: "#", linkedin: "#" },
  },
];

const Header: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const headerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
    color: "white",
    paddingLeft: "10%",
    paddingRight: "10%",
    position: "relative",
    marginTop: "6%",
  };

  const titleStyle: React.CSSProperties = {
    margin: 0,
    fontSize: "35px",
    textTransform: "uppercase",
    fontWeight: "bold",
  };

  const dropdownStyle: React.CSSProperties = {
    position: "relative",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  };

  const dropdownTextStyle: React.CSSProperties = {
    marginRight: "10px",
    fontSize: "20px",
  };

  const dropdownArrowStyle: React.CSSProperties = {
    display: "inline-block",
    transition: "transform 0.3s",
    transform: isDropdownOpen ? "rotate(90deg)" : "rotate(0deg)",
  };

  const dropdownMenuStyle: React.CSSProperties = {
    position: "absolute",
    top: "100%",
    right: 0,
    backgroundColor: "black",
    color: "white",
    border: "1px solid white",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    display: isDropdownOpen ? "flex" : "none",
    flexDirection: "column",
  };

  const dropdownItemStyle: React.CSSProperties = {
    padding: "10px",
    cursor: "pointer",
  };

  return (
    <div style={headerStyle}>
      <h1 style={titleStyle}>THE TEAM</h1>
      <div style={dropdownStyle} onClick={toggleDropdown}>
        <span style={dropdownTextStyle}>MEMBERS</span>
        <span style={dropdownArrowStyle}>&gt;</span>
        <div style={dropdownMenuStyle}>
          <div
            style={dropdownItemStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#333")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "black")
            }
          >
            MEMBERS
          </div>
          <div
            style={dropdownItemStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#333")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "black")
            }
          >
            ALUMNI
          </div>
        </div>
      </div>
    </div>
  );
};

const Members: React.FC = () => {
  return (
    <>
      <Header />
      <Grid
        container
        spacing={10}
        style={{
          paddingLeft: "10%",
          paddingRight: "10%",
          backgroundColor: "#000000",
          paddingTop: "7%",
        }}
      >
        {members.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ backgroundColor: "#0E0E0E", color: "#fff" }}>
              <Avatar
                src={member.image}
                alt={member.name}
                variant="square"
                sx={{ width: "100%", height: 300 }}
              />
              <CardContent style={{ textAlign: "left" }}>
                <div style={{ marginLeft: "3px" }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "#f39c12", fontWeight: "bold" }}
                  >
                    {member.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#999999" }}>
                    "{member.quote}"
                  </Typography>
                </div>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    marginTop: 1,
                  }}
                >
                  {member.social.behance && (
                    <IconButton
                      component="a"
                      href={member.social.behance}
                      target="_blank"
                      sx={{
                        color: "white",
                        "&:hover": { color: "#f39c12" },
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontFamily: "sans-serif",
                          "&:hover": { color: "#f39c12" },
                        }}
                      >
                        Bē
                      </Typography>
                    </IconButton>
                  )}
                  {member.social.instagram && (
                    <IconButton
                      component="a"
                      href={member.social.instagram}
                      target="_blank"
                      sx={{
                        color: "#fff",
                        "&:hover": { color: "#f39c12" },
                      }}
                    >
                      <Instagram />
                    </IconButton>
                  )}
                  {member.social.linkedin && (
                    <IconButton
                      component="a"
                      href={member.social.linkedin}
                      target="_blank"
                      sx={{
                        color: "#fff",
                        "&:hover": { color: "#f39c12" },
                      }}
                    >
                      <LinkedIn />
                    </IconButton>
                  )}
                  {member.social.github && (
                    <IconButton
                      component="a"
                      href={member.social.github}
                      target="_blank"
                      sx={{
                        color: "#fff",
                        "&:hover": { color: "#f39c12" },
                      }}
                    >
                      <GitHub />
                    </IconButton>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Members;
