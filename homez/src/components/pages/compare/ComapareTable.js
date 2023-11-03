import Image from "next/image";

const ComapareTable = () => {
  return (
    <table className="table table-borderless mb-0">
      <thead className="t-head">
        <tr>
          <th scope="col" />
          <th scope="col">Home in Metric Way</th>
          <th scope="col">Villa on Hollywood Boulevard</th>
          <th scope="col">Explore Old Barcelona</th>
        </tr>
      </thead>
      {/* End thead */}

      <thead className="t-head2">
        <tr>
          <th scope="col" />
          {/* End th */}

          <th scope="col">
            <div className="membership_header">
              <div className="thumb">
                <Image
                  width={331}
                  height={245}
                  className="img-fluid mb-3 w100"
                  src="/images/listings/compare-1.jpg"
                  alt="compare-1"
                />
                <div className="h6 price mt-1">$14,000 / mo</div>
                <p className="address mb-0">California City, CA, USA</p>
              </div>
            </div>
          </th>
          {/* End th */}

          <th scope="col">
            <div className="membership_header">
              <div className="thumb">
                <Image
                  width={331}
                  height={245}
                  className="img-fluid mb-3 w100"
                  src="/images/listings/compare-1.jpg"
                  alt="compare-1"
                />
                <div className="h6 price mt-1">$14,000 / mo</div>
                <p className="address mb-0">California City, CA, USA</p>
              </div>
            </div>
          </th>
          {/* End th */}

          <th scope="col">
            <div className="membership_header">
              <div className="thumb">
                <Image
                  width={331}
                  height={245}
                  className="img-fluid mb-3 w100"
                  src="/images/listings/compare-1.jpg"
                  alt="compare-1"
                />
                <div className="h6 price mt-1">$14,000 / mo</div>
                <p className="address mb-0">California City, CA, USA</p>
              </div>
            </div>
          </th>
          {/* End th */}
        </tr>
      </thead>
      {/* End thead2 */}

      <tbody className="t-body">
        <tr>
          <th className="text-end" scope="row">
            Property Type
          </th>
          <td>Apartment</td>
          <td>Studio</td>
          <td>Villa</td>
        </tr>
        {/* End tr */}

        <tr>
          <th className="text-end" scope="row">
            Address
          </th>
          <td>Quincy St</td>
          <td>8100 S Ashland Ave</td>
          <td>194 Mercer Street</td>
        </tr>
        {/* End tr */}

        <tr>
          <th className="text-end" scope="row">
            City
          </th>
          <td>New York</td>
          <td>Chicago</td>
          <td>New York</td>
        </tr>
        {/* End tr */}

        <tr>
          <th className="text-end" scope="row">
            State/county
          </th>
          <td>New York</td>
          <td>New York</td>
          <td>New York</td>
        </tr>
        {/* End tr */}

        <tr>
          <th className="text-end" scope="row">
            Zip/Postal Code
          </th>
          <td>10013</td>
          <td>10013</td>
          <td>10013</td>
        </tr>
        {/* End tr */}

        <tr>
          <th className="text-end" scope="row">
            Country
          </th>
          <td>United States</td>
          <td>United States</td>
          <td>United States</td>
        </tr>
        {/* End tr */}

        <tr>
          <th className="text-end" scope="row">
            Property Size
          </th>
          <td>2560 Sq Ft</td>
          <td>2560 Sq Ft</td>
          <td>2560 Sq Ft</td>
        </tr>
        {/* End tr */}

        <tr>
          <th className="text-end" scope="row">
            Property ID
          </th>
          <td>R43</td>
          <td>R43</td>
          <td>R43</td>
        </tr>
        {/* End tr */}

        <tr>
          <th className="text-end" scope="row">
            Bedrooms
          </th>
          <td>3</td>
          <td>2</td>
          <td>5</td>
        </tr>
        {/* End tr */}

        <tr>
          <th className="text-end" scope="row">
            Bathrooms{" "}
          </th>
          <td>1</td>
          <td>4</td>
          <td>3</td>
        </tr>
        {/* End tr */}

        <tr>
          <th className="text-end" scope="row">
            Garage
          </th>
          <td>1</td>
          <td>4</td>
          <td>3</td>
        </tr>
        {/* End tr */}

        <tr>
          <th className="text-end" scope="row">
            Air Conditioning
          </th>
          <td>
            <a className="check_circle" href="#">
              <span className="fas fa-check" />
            </a>
          </td>
          <td>
            <a className="check_circle" href="#">
              <span className="fas fa-check" />
            </a>
          </td>
          <td>
            <a className="check_circle" href="#">
              <span className="fas fa-check" />
            </a>
          </td>
        </tr>
        {/* End tr */}

        <tr>
          <th className="text-end" scope="row">
            Barbeque
          </th>
          <td>
            <a className="check_circle_close" href="#">
              <span className="fas fa-xmark" />
            </a>
          </td>
          <td>
            <a className="check_circle_close" href="#">
              <span className="fas fa-xmark" />
            </a>
          </td>
          <td>
            <a className="check_circle_close" href="#">
              <span className="fas fa-xmark" />
            </a>
          </td>
        </tr>
        {/* End tr */}

        <tr>
          <th className="text-end" scope="row">
            Gym
          </th>
          <td>
            <a className="check_circle" href="#">
              <span className="fas fa-check" />
            </a>
          </td>
          <td>
            <a className="check_circle" href="#">
              <span className="fas fa-check" />
            </a>
          </td>
          <td>
            <a className="check_circle" href="#">
              <span className="fas fa-check" />
            </a>
          </td>
        </tr>
        {/* End tr */}

        <tr>
          <th className="text-end" scope="row">
            Swimming Pool
          </th>
          <td>
            <a className="check_circle" href="#">
              <span className="fas fa-check" />
            </a>
          </td>
          <td>
            <a className="check_circle" href="#">
              <span className="fas fa-check" />
            </a>
          </td>
          <td>
            <a className="check_circle" href="#">
              <span className="fas fa-check" />
            </a>
          </td>
        </tr>
        {/* End tr */}

        <tr>
          <th className="text-end" scope="row">
            TV Cable
          </th>
          <td>
            <a className="check_circle" href="#">
              <span className="fas fa-check" />
            </a>
          </td>
          <td>
            <a className="check_circle" href="#">
              <span className="fas fa-check" />
            </a>
          </td>
          <td>
            <a className="check_circle" href="#">
              <span className="fas fa-check" />
            </a>
          </td>
        </tr>
        {/* End tr */}
      </tbody>
      {/* End tbody */}
    </table>
  );
};

export default ComapareTable;
