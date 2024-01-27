import React from 'react';
import { Card, CardContent, Typography, TextField, Grid } from '@mui/material';
import { display } from '@mui/system';


const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1.3rem',
};

const svgStyle = {
  width: '43px',
  height: '43px',
  borderRadius: '4px',
  backgroundColor: '#F16A1B',
};

const buttonStyle = {
  backgroundColor: '#2196F3',
  color: 'white',
  padding: '8px 16px',
  borderRadius: '4px',
  marginTop: '16px',
  width: '100%',
};

const CardExample = () => {
  return (
    <Grid container spacing={2} style={{marginLeft:'-4rem',width:'73rem'}}>
      <Grid item xs={12} sm={4}>
        <Card >
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" style={svgStyle}>
                  {/* SVG Path */}
                </svg>
                <Typography variant="h6" component="div">
                  Conversion
                </Typography>
              </div>
              <img src="/icons/menu_hor-icon.svg" alt="menu" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '16px' }}>
              <TextField label="Input 1" variant="outlined" />
              <TextField label="Input 2" variant="outlined" />
              <TextField label="Input 3" variant="outlined" />
            </div>
            <button style={buttonStyle}>
              Archive
            </button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <div style={{display:'flex',flexDirection:'column',gap:'1.4rem'}} >
              <div>
                <div>
                  <Typography variant="h6" component="div">
                    59
                  </Typography>
                  <Typography variant="h6">
                    Holidays
                  </Typography>
                </div>
                
              </div>
              <div style={{ display: "flex", gap:"1rem",alignItems:"center",margin:' '}}>
              <img src="/icons/Cone-min.svg" alt="" />
                <div>
                  <Typography variant="h6" component="div">
                    web Workshop
                  </Typography>
                  <Typography variant="body2">
                    1 hour ago
                  </Typography>
                </div>
              </div>

              <div>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <ul>
                    <li>Agens Reppligers</li>
                    <li>Managements</li>
                    <li>Creative Sprint</li>
                  </ul>
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CardExample;
