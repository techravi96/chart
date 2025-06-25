
import { Grid } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import BarChart from "../components/charts/BarChart";
// import { Pie } from "react-chartjs-2";
// import PieChart from "../components/charts/PieChart";
// import GeoChart from "../components/charts/GeoChart";
import BarChart2 from "../components/charts/BarChart2";
import BarChart3 from "../components/charts/BarChart3";
import BarChart4 from "../components/charts/BarChart4";

export default function HomePage1() {
  return (
    <div className='mainContainer'>
        <Sidebar />
        <Topbar/>
        <div className='heading_title'>
                <h2>Dashboard</h2>
            </div>
        <div className='inner_wrapper'>
          <Grid container spacing={2} className="mb-4">
             <Grid item xs={12} md={6} lg={6}>
                <div className="chart_outer">
                  <BarChart/>
                </div>
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
                <div className="chart_outer">
                  <BarChart2/>
                </div>
            </Grid>

              <Grid item xs={12} md={6} lg={6} style={{marginTop: '20px', marginBottom: '120px'}}>
                <div className="chart_outer">
                  <BarChart3/>
                </div>
              </Grid>

              <Grid item xs={12} md={6} lg={6}  style={{marginTop: '20px', marginBottom: '120px'}}>
                <div className="chart_outer">
                  <BarChart4/>
                </div>
              </Grid>

            {/* <Grid item xs={12} md={6} lg={12}>
              <div className="chart_outer">
                 <PieChart/>
              </div>
            </Grid> */}

            

           


        </Grid>
      </div>
    </div>
  );
};