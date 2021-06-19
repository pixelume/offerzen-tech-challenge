import React from 'react';
import styled from 'styled-components/macro';

const StyledDate = styled.span`
  font-size: 0.7em;
  color: grey;
`

const DateComponent = ({dateObject}) => {

  const isToday = (dateObject) => {
    const today = new Date()
    return dateObject.getDate() === today.getDate() &&
      dateObject.getMonth() === today.getMonth() &&
      dateObject.getFullYear() === today.getFullYear()
  }
  const isYesterday = dateObject => {
    const today = new Date()
    let yesterday = new Date()
    yesterday.setDate(today.getDate() - 1)
    return dateObject.getDate() === yesterday.getDate() &&
      dateObject.getMonth() === yesterday.getMonth() &&
      dateObject.getFullYear() === yesterday.getFullYear()
  }
  
  let formattedDate = dateObject.toLocaleDateString()
  if (isToday(dateObject)) {
    let hour = dateObject.getHours()
    let ampm = 'am'
    if (hour > 12) {
      hour -=12
      ampm = 'pm'
    }
    let minute = dateObject.getMinutes()
    if (minute < 10) {
      minute = `0${minute}`
    }

    formattedDate = `${hour}:${minute}${ampm}`
  } else if (isYesterday(dateObject)) {
    formattedDate = 'Yesterday'
  }
  

  return (
    <StyledDate>{formattedDate}</StyledDate>
  );
}

export default DateComponent;