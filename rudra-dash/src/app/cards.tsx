import React from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Grid,
  Divider,
} from "@mui/material";
import { display } from "@mui/system";
import StandardImageList from "./lastrow";
import { gql, useQuery } from "@apollo/client";
import client from "../../lib/apollo-client";


const  GET_DATA = gql`
    query MyQuery {
      netflix_shows {
        title
        release_year
        rating
        country
        director
        cast_members
        date_added
      }
    }
`;

const cardStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem",
  height: "20rem",
};

const svgStyle = {
  width: "43px",
  height: "43px",
  borderRadius: "4px",
  backgroundColor: "#F16A1B",
};

const buttonStyle = {
  backgroundColor: "#2196F3",
  color: "white",
  padding: "8px 16px",
  borderRadius: "4px",
  marginTop: "16px",
  width: "100%",
};



const CardExample = () => {
  const { loading, error, data } = useQuery(GET_DATA,{
    client,
  });
  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error : {error.message}</p>;
  
  const netflixShows = data.netflix_shows;
  return (
    <Grid
      container
      spacing={2}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent style={cardStyle}>
            <Typography variant="h6" component="div">
              Regina Miles
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Trainer Expert
            </Typography>
            <img src="/icons/star_review.svg" alt=" star" />
            <img src="/icons/review_items.svg" alt="tech-pic" />
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", gap: "4px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" style={svgStyle}>
                  {/* SVG Path */}
                </svg>
                <Typography variant="h6" component="div">
                  Conversion
                </Typography>
              </div>
              <img src="/icons/menu_hor-icon.svg" alt="menu" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "16px",
                gap:'1rem',
              }}
            >
              <TextField label="Input 1" variant="outlined" />
              <TextField label="Input 2" variant="outlined" />
              <TextField label="Input 3" variant="outlined" />
            </div>
            <button style={buttonStyle}>Archive</button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <div>
                <div>
                  <Typography variant="h6" component="div">
                    59
                  </Typography>
                  <Typography variant="h6">Holidays</Typography>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  margin: " ",
                }}
              >
                <img src="/icons/Cone-min.svg" alt="" />
                <div>
                  <Typography variant="h6" component="div">
                    web Workshop
                  </Typography>
                  <Typography variant="body2">1 hour ago</Typography>
                </div>
              </div>

              <div>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet
                </Typography>
                <ul>
                 <Typography variant="body2" color="text.secondary">

                    <li>Agens Reppligers</li>
                    <li>Managements</li>
                    <li>Creative Sprint</li>
                  </Typography>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
  <Card>
          <CardContent style={{ ...cardStyle,padding:'0.3rem' }}>
            <h3>Netflix-Show</h3>
            <div style={{overflowY:'auto',overflowX:'hidden',fontSize:'0.7rem'}}>
              {netflixShows.map((show, index) => (
                <div key={index}  style={{display:"flex",justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                  <h3>{show.title}</h3>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <p>{show.release_year}</p>
                    <p>{show.rating}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <div style={{ display: "flex", gap: "4px" }}>
              <img
                src="/icons/review_items.svg"
                alt="tech-pic"
                style={{ width: "4rem" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h6" component="div">
                  Wade Warren
                </Typography>
                <Typography style={{ color: "blue" }}>6 hours ago</Typography>
              </div>
            </div>
            <Typography style={{ color: "grey" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quam
              tortor nec arcu. Euismod neque ultricies eget adipiscing
              condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Id quam tortor nec arcu. Euismod neque ultricies eget
              adipiscing condimentum.
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <rect width="32" height="32" fill="white" />
                  <path
                    d="M7 12.2049C7 9.88261 8.88261 8 11.2049 8V8C12.5243 8 13.7672 8.61925 14.5618 9.67251L16 11.5789L17.4382 9.67251C18.2328 8.61925 19.4757 8 20.7951 8V8C23.1174 8 25 9.88261 25 12.2049V12.4166C25 13.8919 24.4463 15.3134 23.4484 16.4L15.55 25L8.3942 16.3884C7.49323 15.3041 7 13.9388 7 12.529V12.2049Z"
                    stroke="#8A92A6"
                  />
                </svg>
                <Typography style={{ color: "grey" }}>like</Typography>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <rect width="32" height="32" fill="white" />
                  <path
                    d="M7 7C7 6.44772 7.44772 6 8 6H25C25.5523 6 26 6.44772 26 7V20C26 20.5523 25.5523 21 25 21H18L13 25V21H8C7.44772 21 7 20.5523 7 20V7Z"
                    stroke="#8A92A6"
                  />
                </svg>
                <Typography style={{ color: "grey" }}>140</Typography>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <rect width="32" height="32" fill="white" />
                  <ellipse
                    cx="23.6362"
                    cy="23.9151"
                    rx="4.36376"
                    ry="4.08498"
                    stroke="#0048B3"
                  />
                  <ellipse
                    cx="4.36376"
                    cy="4.08498"
                    rx="4.36376"
                    ry="4.08498"
                    transform="matrix(1 0 0 -1 19.2725 12.1699)"
                    stroke="#0048B3"
                  />
                  <ellipse
                    cx="8.36376"
                    cy="15.7451"
                    rx="4.36376"
                    ry="4.08498"
                    stroke="#0048B3"
                  />
                  <line
                    y1="-0.5"
                    x2="8.66051"
                    y2="-0.5"
                    transform="matrix(0.88177 0.471679 -0.521024 0.853542 11.6372 18.8066)"
                    stroke="#0048B3"
                  />
                  <line
                    y1="-0.5"
                    x2="8.66051"
                    y2="-0.5"
                    transform="matrix(0.88177 -0.471679 -0.521024 -0.853542 11.6372 13.1914)"
                    stroke="#0048B3"
                  />
                </svg>
                <Typography style={{ color: "blue" }}>99 share</Typography>
              </div>
            </div>
            <Divider />
            <div>
              <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
                <img
                  src="/icons/review_items.svg"
                  alt="tech-pic"
                  style={{ width: "4rem" }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="h6" component="div">
                    Paul Molive
                  </Typography>
                  <Typography style={{ color: "grey", fontSize: "1rem" }}>
                    Lorem ipsum dolor sit amet, consectetur elit.
                  </Typography>
                </div>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <TextField
                  label="Recipient’s Username"
                  variant="outlined"
                  style={{ width: "90%" }}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_224)">
                    <rect width="32" height="32" fill="white" />
                    <path
                      d="M16 32C24.8387 32 32 24.8387 32 16C32 7.16133 24.8387 0 16 0C7.16133 0 0 7.16133 0 16C0 24.8387 7.16133 32 16 32ZM7.32133 15.6533L22.748 9.70533C23.464 9.44667 24.0893 9.88 23.8573 10.9627L23.8587 10.9613L21.232 23.336C21.0373 24.2133 20.516 24.4267 19.7867 24.0133L15.7867 21.0653L13.8573 22.924C13.644 23.1373 13.464 23.3173 13.0507 23.3173L13.3347 19.2467L20.748 12.5493C21.0707 12.2653 20.676 12.1053 20.2507 12.388L11.0893 18.156L7.14 16.924C6.28267 16.652 6.264 16.0667 7.32133 15.6533Z"
                      fill="#0048B3"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_224">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
  <Card>
          <CardContent style={{ ...cardStyle,padding:'0.3rem' }}>
            <h3>Director and Country available</h3>
            <div style={{overflowY:'auto',overflowX:'hidden',fontSize:'0.7rem'}}>
              {netflixShows.map((show, index) => (
                <div key={index}  style={{display:"flex",justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                  <h3>{show.title}</h3>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <p>{show.director}</p>
                    <p>{show.country}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </Grid>
        <StandardImageList />
        <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <Typography variant="h6" component="div" style={{marginBottom:'1rem'}}>
              Twitter feeds
              </Typography>
            <div style={{ display: "flex", gap: "4px" }}>
              <img
                src="/icons/review_items.svg"
                alt="tech-pic"
                style={{ width: "4rem" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h6" component="div">
                  Wade Warren
                </Typography>
                <Typography style={{ color: "blue" }}>6 hours ago</Typography>
              </div>
            </div>
            <Typography style={{ color: "grey" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quam
              tortor nec arcu. Euismod neque ultricies eget adipiscing
              condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Id quam tortor nec arcu. Euismod neque ultricies eget
              adipiscing condimentum.
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <rect width="32" height="32" fill="white" />
                  <path
                    d="M7 12.2049C7 9.88261 8.88261 8 11.2049 8V8C12.5243 8 13.7672 8.61925 14.5618 9.67251L16 11.5789L17.4382 9.67251C18.2328 8.61925 19.4757 8 20.7951 8V8C23.1174 8 25 9.88261 25 12.2049V12.4166C25 13.8919 24.4463 15.3134 23.4484 16.4L15.55 25L8.3942 16.3884C7.49323 15.3041 7 13.9388 7 12.529V12.2049Z"
                    stroke="#8A92A6"
                  />
                </svg>
                <Typography style={{ color: "grey" }}>like</Typography>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <rect width="32" height="32" fill="white" />
                  <path
                    d="M7 7C7 6.44772 7.44772 6 8 6H25C25.5523 6 26 6.44772 26 7V20C26 20.5523 25.5523 21 25 21H18L13 25V21H8C7.44772 21 7 20.5523 7 20V7Z"
                    stroke="#8A92A6"
                  />
                </svg>
                <Typography style={{ color: "grey" }}>140</Typography>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <rect width="32" height="32" fill="white" />
                  <ellipse
                    cx="23.6362"
                    cy="23.9151"
                    rx="4.36376"
                    ry="4.08498"
                    stroke="#0048B3"
                  />
                  <ellipse
                    cx="4.36376"
                    cy="4.08498"
                    rx="4.36376"
                    ry="4.08498"
                    transform="matrix(1 0 0 -1 19.2725 12.1699)"
                    stroke="#0048B3"
                  />
                  <ellipse
                    cx="8.36376"
                    cy="15.7451"
                    rx="4.36376"
                    ry="4.08498"
                    stroke="#0048B3"
                  />
                  <line
                    y1="-0.5"
                    x2="8.66051"
                    y2="-0.5"
                    transform="matrix(0.88177 0.471679 -0.521024 0.853542 11.6372 18.8066)"
                    stroke="#0048B3"
                  />
                  <line
                    y1="-0.5"
                    x2="8.66051"
                    y2="-0.5"
                    transform="matrix(0.88177 -0.471679 -0.521024 -0.853542 11.6372 13.1914)"
                    stroke="#0048B3"
                  />
                </svg>
                <Typography style={{ color: "blue" }}>99 share</Typography>
              </div>
            </div>
            <Divider />
            <div>
              <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
                <img
                  src="/icons/review_items.svg"
                  alt="tech-pic"
                  style={{ width: "4rem" }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="h6" component="div">
                    Paul Molive
                  </Typography>
                  <Typography style={{ color: "grey", fontSize: "1rem" }}>
                    Lorem ipsum dolor sit amet, consectetur elit.
                  </Typography>
                </div>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <TextField
                  label="Recipient’s Username"
                  variant="outlined"
                  style={{ width: "90%" }}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_224)">
                    <rect width="32" height="32" fill="white" />
                    <path
                      d="M16 32C24.8387 32 32 24.8387 32 16C32 7.16133 24.8387 0 16 0C7.16133 0 0 7.16133 0 16C0 24.8387 7.16133 32 16 32ZM7.32133 15.6533L22.748 9.70533C23.464 9.44667 24.0893 9.88 23.8573 10.9627L23.8587 10.9613L21.232 23.336C21.0373 24.2133 20.516 24.4267 19.7867 24.0133L15.7867 21.0653L13.8573 22.924C13.644 23.1373 13.464 23.3173 13.0507 23.3173L13.3347 19.2467L20.748 12.5493C21.0707 12.2653 20.676 12.1053 20.2507 12.388L11.0893 18.156L7.14 16.924C6.28267 16.652 6.264 16.0667 7.32133 15.6533Z"
                      fill="#0048B3"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_224">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent style={{ ...cardStyle,padding:'0.3rem' }}>
            <h3>Director and Country available</h3>
            <div style={{overflowY:'auto',overflowX:'hidden',fontSize:'0.7rem'}}>
              {netflixShows.map((show, index) => (
                <div key={index}  style={{display:"flex",justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                  <h3>{show.title}</h3>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <p>{show.cast_members}</p>
                    <p>{show.date_added}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CardExample;
