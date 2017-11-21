import React, { Component } from 'react'
import Chart from './chart';
import Highcharts from 'highcharts'

class Cutting extends Component {
  render() {
    const options = {
      title: {
        text: 'Daily Calorie Consumption'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: ( Highcharts.theme && Highcharts.theme.contrastTextColor ) || 'black'
            }
          }
        }
      },
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      series: [ {
        name: 'Nutrients',
        colorByPoint: true,
        data: [ {
          name: 'Carbohydrates',
          y: 33
        }, {
          name: 'Proteins',
          y: 56,
          sliced: true,
          selected: true
        }, {
          name: 'Fats',
          y: 7
        }, {
          name: 'Vitamins & Minerals',
          y: 4
        } ]
      } ]
    };
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xs-4'>
            <center><h3>Daily Intake</h3></center>
          </div>
          <div className='col-xs-8'>
            <Chart options={options}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Cutting
