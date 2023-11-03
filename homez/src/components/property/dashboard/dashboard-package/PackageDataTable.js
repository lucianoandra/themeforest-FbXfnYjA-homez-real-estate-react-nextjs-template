import React from "react";

const packageData = [
  {
    type: "Free",
    propertiesRemaining: 3,
    featuredRemaining: 2,
    renewalRemaining: 7,
    storageSpace: "2 MB / 20 MB",
    expiryDate: "December 31, 2022",
  },
  {
    type: "Free",
    propertiesRemaining: 3,
    featuredRemaining: 2,
    renewalRemaining: 7,
    storageSpace: "2 MB / 20 MB",
    expiryDate: "December 31, 2022",
  },
  {
    type: "Free",
    propertiesRemaining: 3,
    featuredRemaining: 2,
    renewalRemaining: 7,
    storageSpace: "2 MB / 20 MB",
    expiryDate: "December 31, 2022",
  },
  {
    type: "Free",
    propertiesRemaining: 3,
    featuredRemaining: 2,
    renewalRemaining: 7,
    storageSpace: "2 MB / 20 MB",
    expiryDate: "December 31, 2022",
  },
  {
    type: "Free",
    propertiesRemaining: 3,
    featuredRemaining: 2,
    renewalRemaining: 7,
    storageSpace: "2 MB / 20 MB",
    expiryDate: "December 31, 2022",
  },
  {
    type: "Free",
    propertiesRemaining: 3,
    featuredRemaining: 2,
    renewalRemaining: 7,
    storageSpace: "2 MB / 20 MB",
    expiryDate: "December 31, 2022",
  },
  {
    type: "Free",
    propertiesRemaining: 3,
    featuredRemaining: 2,
    renewalRemaining: 7,
    storageSpace: "2 MB / 20 MB",
    expiryDate: "December 31, 2022",
  },
  {
    type: "Free",
    propertiesRemaining: 3,
    featuredRemaining: 2,
    renewalRemaining: 7,
    storageSpace: "2 MB / 20 MB",
    expiryDate: "December 31, 2022",
  },
  {
    type: "Free",
    propertiesRemaining: 3,
    featuredRemaining: 2,
    renewalRemaining: 7,
    storageSpace: "2 MB / 20 MB",
    expiryDate: "December 31, 2022",
  },
  {
    type: "Free",
    propertiesRemaining: 3,
    featuredRemaining: 2,
    renewalRemaining: 7,
    storageSpace: "2 MB / 20 MB",
    expiryDate: "December 31, 2022",
  },
];

const PackageDataTable = () => {
  return (
    <table className="table-style3 table">
      <thead className="t-head">
        <tr>
          <th scope="col">Current Package</th>
          <th scope="col">Properties remaining</th>
          <th scope="col">Featured remaining</th>
          <th scope="col">Renewal remaining</th>
          <th scope="col">Storage Space</th>
          <th scope="col">Expiry Date</th>
        </tr>
      </thead>
      <tbody className="t-body">
        {packageData.map((packageItem, index) => (
          <tr key={index}>
            <th scope="row">{packageItem.type}</th>
            <td>{packageItem.propertiesRemaining}</td>
            <td>{packageItem.featuredRemaining}</td>
            <td>{packageItem.renewalRemaining}</td>
            <td>{packageItem.storageSpace}</td>
            <td>{packageItem.expiryDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PackageDataTable;
