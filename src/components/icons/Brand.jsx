import { SvgIcon } from "@mui/material";
import { makeStyles } from '@mui/styles';
import clsx from "clsx";
import PropTypes from 'prop-types';
import { colors } from "../../utils";

export const Brand = ({ width, height, className = '', variant = 'big', ...rest }) =>   
  variant === 'big' ? 
    <SvgIcon className={className} viewBox='0 0 96 32' fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path fillRule="evenodd" clipRule="evenodd" d="M0 73L52 0L100 73H0Z" fill="url(#paint0_linear_167_841)"/>
      <path opacity="0.8" d="M32 56.5C14.0713 58.3872 5.66667 67.3333 0 73L52 0L68.5 25C57.5 29 59.0829 36.8066 56 44C54.5 47.5 51 54.5 32 56.5Z" fill="url(#paint1_linear_167_841)"/>
      <path opacity="0.8" d="M37.5 61.4895C20.7033 58.8857 5.66667 67.2448 0 73H61C60 71.0816 51 63.5823 37.5 61.4895Z" fill="url(#paint2_linear_167_841)"/>
      <defs>
        <linearGradient id="paint0_linear_167_841" x1="0" y1="0" x2="34.3628" y2="96.3977" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FAEB0B"/>
          <stop offset="1" stopColor="#FE009D"/>
        </linearGradient>
        <linearGradient id="paint1_linear_167_841" x1="3.77358" y1="67.2368" x2="68.7514" y2="19.3726" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.65"/>
          <stop offset="1" stopColor="white" stopOpacity="0.1"/>
        </linearGradient>
        <linearGradient id="paint2_linear_167_841" x1="61" y1="71.5" x2="1.5" y2="73" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.5"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </SvgIcon> :
    <SvgIcon className={className} viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 38L27.56 0L53 38H0Z" fill="url(#paint0_linear_167_849)"/>
      <path opacity="0.8" d="M16.96 29.411C7.45779 30.3934 3.00333 35.0502 0 38L27.56 0L36.305 13.0137C30.475 15.0959 31.3139 19.1596 29.68 22.9041C28.885 24.726 27.03 28.3699 16.96 29.411Z" fill="url(#paint1_linear_167_849)"/>
      <path opacity="0.8" d="M19.875 32.0082C10.9728 30.6528 3.00333 35.0041 0 38H32.33C31.8 37.0014 27.03 33.0976 19.875 32.0082Z" fill="url(#paint2_linear_167_849)"/>
      <defs>
        <linearGradient id="paint0_linear_167_849" x1="0" y1="0" x2="17.6388" y2="50.3804" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FAEB0B"/>
          <stop offset="1" stopColor="#FE009D"/>
        </linearGradient>
        <linearGradient id="paint1_linear_167_849" x1="2" y1="35" x2="36" y2="9.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.65"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="paint2_linear_167_849" x1="32.33" y1="37.2192" x2="0.795733" y2="38.0286" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.55"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </SvgIcon>

  

Brand.propTypes = {
  // width: PropTypes.oneOf(['53', '100']),
  // height: PropTypes.oneOf(['38', '73']),
  // variant: PropTypes.oneOf('small', 'big'),
  // className: PropTypes.string,
  // fill: PropTypes.oneOfType(colors)
}