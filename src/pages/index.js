import { Helmet } from "react-helmet-async";
import { subDays, subHours, subMinutes } from "date-fns";
import ShoppingBagIcon from "@heroicons/react/24/solid/ShoppingBagIcon";
import ShoppingCartIcon from "@heroicons/react/24/solid/ShoppingCartIcon";
import CurrencyDollarIcon from "@heroicons/react/24/solid/CurrencyDollarIcon";
import {
  Avatar,
  Box,
  Container,
  Icon,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { OverviewKpi } from "src/sections/overview/overview-kpi";
import { OverviewLatestCustomers } from "src/sections/overview/overview-latest-customers";
import { OverviewSummary } from "src/sections/overview/overview-summary";
import GreenField from "../components/green-field";

const now = new Date();

const Page = () => (
  <>
    <Helmet>
      <title>BITONITE1</title>
    </Helmet>
    <Box
      sx={{
        flexGrow: 2,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <div>
            <Typography variant="h4">BTC Stats</Typography>
          </div>
          <div>
            <Grid container spacing={3}>
              <Grid xs={12} md={3}>
                {/* <OverviewSummary
                  icon={""}
                  label='Orders'
                  value='$23,996.20'
                /> */}
                <GreenField
                  title="Live Price"
                  description={null}
                  current_cost="$30,987,456,006"
                  plus_cost="+$102,90 (5.13%) today"
                />
              </Grid>
              <Grid xs={12} md={3}>
                <GreenField
                  title="Market Cap"
                  description=""
                  current_cost="$30,987,456,006"
                  plus_cost={null}
                  sub_cost={null}
                />
              </Grid>
              <Grid xs={12} md={3}>
                <GreenField
                  title="24h Volume"
                  description="A measure of how much of a cryptocurrency was traded in the last 24 hours."
                  current_cost="$30,987,456,006"
                  plus_cost={null}
                  sub_cost="1,292,892 BTC"
                />
              </Grid>
              <Grid xs={12} md={3}>
                <GreenField
                  title="Today's Change"
                  description={null}
                  current_cost="$30,987,456,006"
                  plus_cost="+$102,90 (5.13%) today"
                  isActive={true}
                />
              </Grid>
            </Grid>
          </div>
          <div>
            <div>
              <Typography variant="h4">BTC Chart</Typography>
            </div>
            <div>
              <div style={{ height: "100%", display: "grid" }}>
                <span class="MuiTypography-root css-10pvg4-MuiTypography-root">{"Live Price"}</span>
                <div style={{ bottom: "0px", display: "grid", justifyContent: "flex-start" }}>
                  <h6
                    class="MuiTypography-root MuiTypography-h6 css-1m7jvl4-MuiTypography-root"
                    style={{ margin: "auto", marginLeft: "0px", marginBottom: "0px" }}
                  >
                    {"$23,996.20"}
                  </h6>
                  <span
                    class="MuiTypography-root css-10pvg4-MuiTypography-root"
                    style={{
                      fontSize: "10px",
                      margin: "auto",
                      marginLeft: "0px",
                      marginBottom: "0px",
                      padding: "1px 10px",
                      background: "#08705570",
                      color: "#087055",
                      borderRadius: "20px",
                    }}
                  >
                    {"+$102,90 (5.13%) today"}
                  </span>
                </div>
              </div>
            </div>
            <div style={{ paddingTop: "24px" }}>
              <Grid container spacing={3}>
                <Grid md={8}>
                  <OverviewKpi
                    chartSeries={[
                      {
                        data: [0, 20, 40, 30, 30, 44, 90],
                        name: "Revenue",
                      },
                    ]}
                    stats={[
                      {
                        label: "24hr",
                      },
                      {
                        label: "7d",
                      },
                      {
                        label: "30d",
                      },
                      {
                        label: "3m",
                      },
                      {
                        label: "1y",
                      },
                    ]}
                  />
                </Grid>
              </Grid>
            </div>
          </div>
          <div>
            <Typography variant="h4">BTC to USD Converter</Typography>
          </div>
          <Grid container>
            <Grid xs={12} md={4}>
              <OverviewSummary icon={""} label="BTC" value="10" />
            </Grid>
            <Grid
              xs={12}
              md={1}
              sx={{
                display: "flex",
                padding: "10px",
              }}
            >
              <div
                style={{
                  padding: "0px",
                  margin: "auto",
                  borderRadius: "50%",
                  background: "#c6ff03",
                  display: "flex",
                  height: "40px",
                  width: "40px",
                }}
              >
                <span style={{ margin: "auto", color: "black" }}>=</span>
              </div>
            </Grid>
            <Grid xs={12} md={4}>
              <OverviewSummary icon={""} label="USD" value="$240,070.26" />
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  </>
);

export default Page;
