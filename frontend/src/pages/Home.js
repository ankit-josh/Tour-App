import React, { useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { getTours} from "../redux/feature/TourSlice";
import CardTour from "../components/CardTour";



const Home = () => {
  const { tours,loading} = useSelector(
    (state) => ({
      ...state.tour,
    })
  );
  const dispatch = useDispatch();
 


  useEffect(() => {
    dispatch(getTours());
    
  }, []);

  if (loading) {
    return (
      <h3>Loading ...</h3>
    );
  }
  return (
    <div
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "1000px",
        alignContent: "center",
      }}
    >
      <MDBRow className="mt-5">
        
          {/* <MDBTypography className="text-center mb-0" tag="h2">
            No Tours Found
          </MDBTypography>
        

        
          <MDBTypography className="text-center mb-0" tag="h2">
            We couldn't find any matches for 
          </MDBTypography> */}
        

        <MDBCol>
          <MDBContainer>
            <MDBRow className="row-cols-1 row-cols-md-3 g-2">
              {tours &&
                tours.map((item) => <CardTour key={item._id} {...item} />)}
            </MDBRow>
          </MDBContainer>
        </MDBCol>
      </MDBRow>
      
        
    </div>
  );
};

export default Home;