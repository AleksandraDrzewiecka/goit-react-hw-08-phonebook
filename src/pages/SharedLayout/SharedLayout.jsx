import { Box, Container } from '@mui/material';
import { NavMenu } from 'components/NavMenu/NavMenu';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuth } from 'utils/useAuth';
import styles from './SharedLayout.module.css';

export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box className={styles.container} display="flex" flexDirection="column" height="100vh">
      <Container maxWidth="md">
        <Box className={styles.box} display="flex" flexDirection="column" minHeight="90vh">
          <Box
            className={styles.box}
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            p={2}
          >
            <h1 className={styles.title}>Your Phonebook</h1>
            {isLoggedIn ? <UserMenu className={styles.userMenu} /> : <NavMenu />}
          </Box>
          <Box className={styles.box} display="flex" flexDirection="column" p={2}>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </Box>
        </Box>
      </Container>
      <Toaster position="top-center" reverseOrder />
    </Box>
  );
};