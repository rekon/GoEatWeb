import React, { Component } from 'react'
import Chart from './chart';
import Highcharts from 'highcharts'
import MiniChart from './mini_chart'
import { bulking_context } from '../utils/bulking_context'

class Bulking extends Component {
  render() {
    let foods = [ {
        name: 'Banana (118gm)',
        proteins: 1,
        carbohydrates: 27,
        fats: 0
      },
      {
        name: 'Butter (14gm)',
        proteins: 0,
        carbohydrates: 0,
        fats: 11
      },
      {
        name: 'Peanut Butter (32gm)',
        proteins: 8,
        carbohydrates: 6,
        fats: 16
      },
      {
        name: 'Walnut (28gm)',
        proteins: 4,
        carbohydrates: 4,
        fats: 18
      },
      {
        name: 'Chicken Breast (86gm)',
        proteins: 27,
        carbohydrates: 0,
        fats: 3
      },
      {
        name: 'Brown Rice (195gm)',
        proteins: 5,
        carbohydrates: 45,
        fats: 2
      } ],

      foodItems = foods.map( (food, index) => {
        return (
          <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 go-eat-mini-chart thumbnail' key={index}>
            <MiniChart name={food.name} proteins={food.proteins} carbohydrates={food.carbohydrates} fats={food.fats} />
          </div>
        )
      })

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
            format: '<b>{point.name}</b><br/><div><center>{point.percentage:.1f} %</center></div>',
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
          name: 'Carbs',
          y: 40
        }, {
          name: 'Proteins',
          y: 40,
          sliced: true,
          selected: true
        }, {
          name: 'Fats',
          y: 16
        }, {
          name: 'Vitamins & Minerals',
          y: 4
        } ]
      } ]
    };
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xs-12 col-md-4 col-lg-6'>
            <center><h3>Daily Intake (Bulking)</h3></center>
            {bulking_context( this.props.BmrReducer.bmrValueModified )}
          </div>
          <div className='col-xs-12 col-md-8 col-lg-6'>
            <Chart options={options}/>
          </div>
        </div>
        <div className='row well'>
          {foodItems}
        </div>
      </div>
    )
  }
}

export default Bulking
