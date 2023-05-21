import { Link, Typography, Box, Button } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { Navigate, Link as RouterLink } from 'react-router-dom';
import { useAuth } from 'utils/useAuth';

const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Helmet>
        <title>PhoneBook</title>
      </Helmet>
      {isLoggedIn ? (
        <Navigate to="/contacts" />
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt={8}
          mx="auto"
          textAlign="center"
        >
          <Typography variant="h4">This is your Phonebook</Typography>
          <Typography variant="h6">
            Please{' '}
            <Link component={RouterLink} to="/login">
              log in
            </Link>{' '}
            or{' '}
            <Link component={RouterLink} to="/signup">
              register
            </Link>{' '}
            to continue
          </Typography>
          <Button
            component={RouterLink}
            to="/signup"
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 4 }}
          >
            Sign Up
          </Button>
        </Box>
      )}
    </>
  );
};

export default HomePage;