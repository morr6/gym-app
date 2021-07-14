import React from 'react'

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SettingsIcon from '@material-ui/icons/Settings';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PollIcon from '@material-ui/icons/Poll';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

import { 
  Container, 
  MiddleLine, 
  LinksWrapper,
  CustomLink 
} from './Homepage.styles'

const iconStyles = { fontSize: 50, marginBottom: '20px' };

export const Homepage = () => {
  return (
    <Container>
      <MiddleLine />

      <LinksWrapper>
        <CustomLink to="/training"> 
          <PlayCircleFilledIcon style={iconStyles} />
          Start training 
        </CustomLink>

        <CustomLink to="/customize"> 
          <AssignmentIcon style={iconStyles} />
          Customize plans 
        </CustomLink>

        <CustomLink to="/exercises"> 
          <DirectionsRunIcon style={iconStyles} />
          Exercises
        </CustomLink>

        <CustomLink to="/analysis"> 
          <PollIcon style={iconStyles} />
          Analysis
        </CustomLink>

        <CustomLink noBorder to="/settings"> 
          <SettingsIcon style={iconStyles} />
          Settings 
        </CustomLink>

        <CustomLink noBorder to="/logut"> 
          <MeetingRoomIcon style={iconStyles} />
          Logout 
        </CustomLink>
      </LinksWrapper>
    </Container>
  )
}

export default Homepage;