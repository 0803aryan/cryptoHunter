import { Container, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Carousel from "./Carousel";

// Styled components
const BannerWrapper = styled(Box)(({ theme }) => ({
  backgroundImage: "url(./banner2.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

function Banner() {
  return (
    <BannerWrapper>
      <Container
        sx={{
          height: 400,
          display: "flex",
          flexDirection: "column",
          paddingTop: "20px",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "40%",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              marginBottom: 2,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Hunter
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </div>
        {/* <CarouselWrapper> */}
        <Carousel />
        {/* </CarouselWrapper> */}
      </Container>
    </BannerWrapper>
  );
}

export default Banner;
