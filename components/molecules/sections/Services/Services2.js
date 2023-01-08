import React from "react";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import StarsIcon from "@material-ui/icons/Stars";
import HighQualityIcon from "@material-ui/icons/HighQuality";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import Grid from '@mui/material/Grid'; 
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CN from 'classnames'
import styles from './Services.module.scss'

const Item = styled(Paper)(({ theme }) => ({

  padding: theme.spacing(1),
  textAlign: 'center',

}));

export const Services2 = ({ className, children, ...restProps }) => {
  return (
    <div
    className={CN(
      styles['services'],
      'pt-[120px] lg:pt-[180px] pb-[60px] relative',
      className
    )}
    {...restProps}
    id='services'>
            <div className='container px-[95px] relative z-[1000]'>
        <div className='services__heading max-w-[560px] flex flex-col items-center justify-center gap-[40px] mx-auto mb-[60px] lg:mb-[120px]'>
       
          <h2 className='text-center'>
            Our Services
          </h2>
        </div>


        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
                              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 ifs-box-area">
                      <p className="container">
                        <h5>
                          <HighQualityIcon
                            style={{
                              fontSize: "35px",
                              paddingRight: "5px",
                              color: "#bbff00",
                            }}
                          />
                          Blockchain Consulting
                        </h5>
                        We provides consultion on how the adoption of blockchain
                        can benefit your enterprise solution and bring trust and
                        transparency to the system.
                      </p>
                    </div>
        </Grid>
        <Grid item xs={4}>
        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 ifs-box-area">
                      <p className="container">
                        <h5>
                          <HighQualityIcon
                            style={{
                              fontSize: "35px",
                              paddingRight: "5px",
                              color: "#bbff00",
                            }}
                          />
                          Blockchain Consulting
                        </h5>
                        We provides consultion on how the adoption of blockchain
                        can benefit your enterprise solution and bring trust and
                        transparency to the system.
                      </p>
                    </div>
        </Grid>
        <Grid item xs={4}>
        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 ifs-box-area">
                      <p className="container">
                        <h5>
                          <HighQualityIcon
                            style={{
                              fontSize: "35px",
                              paddingRight: "5px",
                              color: "#bbff00",
                            }}
                          />
                          Blockchain Consulting
                        </h5>
                        We provides consultion on how the adoption of blockchain
                        can benefit your enterprise solution and bring trust and
                        transparency to the system.
                      </p>
                    </div>
        </Grid>
        <Grid item xs={4}>
        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 ifs-box-area">
                      <p className="container">
                        <h5>
                          <HighQualityIcon
                            style={{
                              fontSize: "35px",
                              paddingRight: "5px",
                              color: "#bbff00",
                            }}
                          />
                          Blockchain Consulting
                        </h5>
                        We provides consultion on how the adoption of blockchain
                        can benefit your enterprise solution and bring trust and
                        transparency to the system.
                      </p>
                    </div>
        </Grid>
      </Grid>
    </Box>
        
</div>
</div>
  );
}

export default Services2;
