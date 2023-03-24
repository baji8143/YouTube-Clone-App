import {  Stack ,Box } from "@mui/material";
import React from "react";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const Videos = ({ videos,direction,marginLeft }) => {
  if(!videos?.length) return 'Loading...'
  
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start"  gap={2} sx={{marginLeft:marginLeft}} >
      {videos.map((item, idx) => (
        <Box key={idx}>
            {item.id.videoId && <VideoCard video={item}/>}
            {item.id.channelId && <ChannelCard channelDetail={item}/>}
        </Box>
      ))} 
    </Stack>
  );
};

export default Videos;
