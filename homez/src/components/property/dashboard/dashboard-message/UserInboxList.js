import Image from "next/image";
import React from "react";

const users = [
  {
    name: "Darlene Robertson",
    position: "Head of Development",
    imageUrl: "/images/inbox/ms1.png",
    notificationStatus: "online",
  },
  {
    name: "Jane Cooper",
    position: "Head of Development",
    imageUrl: "/images/inbox/ms2.png",
    notificationStatus: "none",
  },
  {
    name: "Arlene McCoy",
    position: "Head of Development",
    imageUrl: "/images/inbox/ms3.png",
    notificationStatus: "away",
  },
  {
    name: "Albert Flores",
    position: "Head of Development",
    imageUrl: "/images/inbox/ms4.png",
    notificationStatus: "busy",
  },
  {
    name: "Darlene Robertson",
    position: "Head of Development",
    imageUrl: "/images/inbox/ms1.png",
  },
  {
    name: "Darlene Robertson",
    position: "Head of Development",
    imageUrl: "/images/inbox/ms1.png",
  },
  {
    name: "Jane Cooper",
    position: "Head of Development",
    imageUrl: "/images/inbox/ms2.png",
  },
  {
    name: "Arlene McCoy",
    position: "Head of Development",
    imageUrl: "/images/inbox/ms3.png",
  },
  {
    name: "Albert Flores",
    position: "Head of Development",
    imageUrl: "/images/inbox/ms4.png",
    notificationStatus: "busy",
  },
  {
    name: "Jane Cooper",
    position: "Head of Development",
    imageUrl: "/images/inbox/ms2.png",
  },
  {
    name: "Arlene McCoy",
    position: "Head of Development",
    imageUrl: "/images/inbox/ms3.png",
  },
];

const UserItem = ({ user }) => {
  return (
    <div className="list-item">
      <a href="#">
        <div className="d-flex align-items-center position-relative">
          <Image
            width={50}
            height={50}
            className="img-fluid float-start rounded-circle mr10"
            src={user.imageUrl}
            alt={`${user.name}'s profile`}
          />
          <div className="d-sm-flex">
            <div className="d-inline-block">
              <div className="fz14 fw600 dark-color ff-heading mb-0">
                {user.name}
              </div>
              <p className="preview">{user.position}</p>
            </div>

            <div className="iul_notific">
              <small>35 mins</small>
              {user.notificationStatus !== undefined && (
                <div className={`m_notif ${user.notificationStatus}`}>2</div>
              )}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

const UserInboxList = () => {
  return (
    <>
      {users.map((user, index) => (
        <UserItem key={index} user={user} />
      ))}
    </>
  );
};

export default UserInboxList;
