import React from 'react';
import { Card, CardContent, Typography, TextField, Grid, Button } from '@mui/material';

const CardExample = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent className='flex flex-col items-center '>
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
            <div className='flex justify-between items-center'>
            <div className='flex gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                <rect width="43" height="43" rx="4" fill="#F16A1B"/>
                <path d="M11.8667 16.899L10.0156 18.4773C10.5469 16.4132 11.6146 14.5264 13.1105 13.0083C14.6064 11.4902 16.4772 10.3947 18.5332 9.83308C20.5892 9.27144 22.7571 9.26362 24.8171 9.81039C26.8771 10.3572 28.7558 11.4391 30.2626 12.9464L33.1127 10.0956C31.0856 8.06918 28.5549 6.61975 25.7814 5.8966C23.0078 5.17345 20.0916 5.20272 17.3331 5.9814C14.5746 6.76009 12.0736 8.26003 10.0876 10.3267C8.10155 12.3935 6.70236 14.9522 6.03411 17.7395L4.70312 16.125L1.34375 18.1406L7.35233 26.0473L14.4829 19.9668L11.8667 16.899Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M41.6562 24.859L36.0192 16.7603L29.0035 23.0678L31.699 26.0657L33.4056 24.5312C32.873 26.5943 31.8043 28.4799 30.3078 29.9967C28.8113 31.5135 26.9404 32.6076 24.8846 33.168C22.8289 33.7285 20.6615 33.7353 18.6023 33.1878C16.5431 32.6403 14.6653 31.558 13.1593 30.0506L10.3105 32.9027C12.3301 34.9216 14.8495 36.368 17.6112 37.094C20.373 37.82 23.278 37.7996 26.0293 37.0349C28.7806 36.2701 31.2794 34.7885 33.2704 32.7414C35.2613 30.6943 36.6729 28.1552 37.3609 25.3838L38.5434 26.9889L41.6562 24.859Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <Typography variant="h6" component="div">
              Conversion
            </Typography>
            </div>
            <img src="/icons/menu_hor-icon.svg" alt="menu" />
            </div>
            <div className="flex flex-col space-y-2 mt-4">
                    <TextField label="Input 1" variant="outlined" />
                    <TextField label="Input 2" variant="outlined" />
                    <TextField label="Input 3" variant="outlined" />
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full">
                Archive
            </button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <div>
          <div className='flex justify-between'>
                <div>
                <Typography variant="h6" component="div">
                59
                </Typography>
                <Typography variant="h6">
                Holidays
                </Typography>
                </div>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <rect width="60" height="60" rx="4" fill="#C03221"/>
                    <circle cx="29.75" cy="29.75" r="21.75" stroke="white"/>
                    <circle cx="22.1375" cy="24.3152" r="3.2625" fill="white"/>
                    <circle cx="37.3616" cy="24.3152" r="3.2625" fill="white"/>
                    <path d="M38.4522 34.0945C38.4522 35.237 38.2272 36.3683 37.79 37.4239C37.3528 38.4794 36.7119 39.4385 35.9041 40.2464C35.0962 41.0542 34.1371 41.6951 33.0816 42.1323C32.0261 42.5695 30.8947 42.7945 29.7522 42.7945C28.6097 42.7945 27.4784 42.5695 26.4229 42.1323C25.3674 41.6951 24.4083 41.0542 23.6004 40.2464C22.7925 39.4385 22.1517 38.4794 21.7145 37.4239C21.2773 36.3683 21.0522 35.237 21.0522 34.0945" stroke="white"/>
                </svg>
            </div>
            <div className="flex gap-4 mt-4">
                <img src="/icon/web_window.png" alt="web" />
                <div>
                <Typography variant="h6" component="div">
                web Workshop
                </Typography>
                <Typography variant="body2">
                1 hour agp
                </Typography>
                </div>
            </div>
            <div className="flex flex-col justify-between mt-4 gap-10">
                <Typography  variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet                </Typography>
                <Typography  variant="body2" color="text.secondary">
                <ul className="list-disc pl-4">
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
