import React, { Component } from 'react'
import Chart from './chart';
import Highcharts from 'highcharts'
import MiniChart from './mini_chart'
import { cutting_context } from '../utils/cutting_context'

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
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
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
      series: [{
        name: 'Nutrients',
        colorByPoint: true,
        data: [{
          name: 'Carbs',
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
        }]
      }]
    };
    let
      foods = [{
        name: 'Chicken Legs (95gm)',
        proteins: 26,
        carbohydrates: 0,
        fats: 8
      }, {
        name: 'Tuna (165gm)',
        proteins: 42,
        carbohydrates: 0,
        fats: 1
      }, {
        name: 'Lentils (198gm)',
        proteins: 18,
        carbohydrates: 40,
        fats: 1
      }],
      foodItems = foods.map((food, index) => {
        return (
          <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 go-eat-mini-chart thumbnail' key={index}>
            <MiniChart name={food.name} proteins={food.proteins} carbohydrates={food.carbohydrates} fats={food.fats} />
          </div>
        )
      })
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xs-12 col-md-4 col-lg-6'>
            <center><h3>Daily Intake (Cutting)</h3></center>
            {cutting_context(this.props.BmrReducer.bmrValueModified)}
          </div>
          <div className='col-xs-12 col-md-8 col-lg-6'>
            <Chart options={options} />
          </div>
        </div>
        <div className='row well'>
          {foodItems}
        </div>
      </div>
    )
  }
}

export default Cutting
