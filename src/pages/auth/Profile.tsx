import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user } = useAuth0();
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <span className="visually-hidden content-center items-center place-items-center">
          <p className="antialiased text-2xl font-bold">Profile page</p>
          <p>
            <strong>user?.name:</strong> {user?.name}
          </p>
        </span>
      </div>
    </div>
  );
};

export default Profile;
