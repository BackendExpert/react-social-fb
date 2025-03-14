import React from 'react';

const ProfileImgUser = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center md:items-start md:ml-32">
        {/* Profile Image */}
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <img
            src="https://avatars.githubusercontent.com/u/138636749?v=4"
            alt="Profile"
            className="md:border-8 border-4 border-white md:h-40 h-16 w-16 md:w-40 rounded-full"
          />
        </div>

        {/* User Info */}
        <div className="mt-4 md:mt-12 md:ml-4 ml-28 ">
          <h1 className="md:text-2xl text-gray-500 font-semibold">Jehan Weerasuriya</h1>
          <div className="mt-2 flex md:justify-start space-x-3 text-gray-600">
            <div className="flex items-center">
              <span>1.5k</span>
              <span className="ml-2">followers</span>
            </div>
            <span>|</span>
            <div className="flex items-center">
              <span>5</span>
              <span className="ml-2">following</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileImgUser;
