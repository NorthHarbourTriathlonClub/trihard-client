import { Typography } from '@mui/material';
import { images } from 'assets/Images';
import { Link } from 'react-router-dom';

export default function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="#" to={''}>
        TriHard
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        Created by{' '}
        <Link color="inherit" href={`${images.creatorUrl}`} to={''}>
          Mingyang Li
        </Link>
      </Typography>
    </Typography>
  );
}
