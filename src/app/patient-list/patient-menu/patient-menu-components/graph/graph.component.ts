import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  patientData;
  reducedPatientData;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    const myArray = this.route.snapshot.queryParamMap.get('myArray');

    if (myArray === null) {
      console.log("array is null");
      console.log(this.patientData);
    } else {
      this.patientData = JSON.parse(myArray);
      // this.reducedPatientData = this.patientData.slice(2, 4);
      this.reducedPatientData = [];
      var i = 0;
      this.patientData.forEach(element => {
          var tmp = {
            heartrate: element.heartrate,
            bloodpressure: element.bloodpressure,
            glucose: element.glucose,
            temperature: element.temperature,
            fall: element.fall,
            date: i
            // date: element.date.substring(0,10)
          }
          this.reducedPatientData.push(tmp);
          i++;
      });
    }
    console.log(this.reducedPatientData[0].date);
  }

  sampleData: any[] = [
    { Day: '20-05-2020 03:31:43', Skin_Conductivity: 30, Heart_Rate: 10, Blood_Sugar: 25, Body_Temperature: 40, Blood_Pressure: 11 },
    { Day: '20-05-2020 03:31:43', Skin_Conductivity: 25, Heart_Rate: 15, Blood_Sugar: 10, Body_Temperature: 50, Blood_Pressure: 12 },
    { Day: '20-05-2020 03:31:43', Skin_Conductivity: 40, Heart_Rate: 20, Blood_Sugar: 25, Body_Temperature: 40, Blood_Pressure: 10 },
    { Day: '20-05-2020 03:31:43', Skin_Conductivity: 45, Heart_Rate: 20, Blood_Sugar: 25, Body_Temperature: 50, Blood_Pressure: 14 },
    { Day: '20-05-2020 03:31:43', Skin_Conductivity: 30, Heart_Rate: 20, Blood_Sugar: 30, Body_Temperature: 60, Blood_Pressure: 10 },
    { Day: '20-05-2020 03:31:43', Skin_Conductivity: 20, Heart_Rate: 30, Blood_Sugar: 10, Body_Temperature: 90, Blood_Pressure: 11 }
  ];

  padding: any = { left: 10, top: 10, right: 15, bottom: 10 };
  titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };
  getWidth(): any {
    if (document.body.offsetWidth < 850) {
      return '90%';
    }

    return 850;
  }

  xAxis: any =
    {
      dataField: 'date',
      unitInterval: 1,
      tickMarks: { visible: true, interval: 1 },
      gridLinesInterval: { visible: true, interval: 1 },
      valuesOnTicks: false,
      padding: { bottom: 10 }
    };
  valueAxis: any =
    {
      unitInterval: 10,
      minValue: 0,
      title: { text: 'Unit<br><br>' },
      labels: { horizontalAlignment: 'right' }
    };
  seriesGroups: any[] =
    [
      {
        type: 'line',
        series:
          [
            {
              dataField: 'heartrate',
              symbolType: 'square',
              labels:
              {
                visible: true,
                backgroundColor: '#FEFEFE',
                backgroundOpacity: 0.2,
                borderColor: '#7FC4EF',
                borderOpacity: 0.7,
                padding: { left: 5, right: 5, top: 0, bottom: 0 }
              }
            },
            {
              dataField: 'bloodpressure',
              symbolType: 'square',
              labels:
              {
                visible: true,
                backgroundColor: '#FEFEFE',
                backgroundOpacity: 0.2,
                borderColor: '#7FC4EF',
                borderOpacity: 0.7,
                padding: { left: 5, right: 5, top: 0, bottom: 0 }
              }
            },
            {
              dataField: 'glucose',
              symbolType: 'square',
              labels:
              {
                visible: true,
                backgroundColor: '#FEFEFE',
                backgroundOpacity: 0.2,
                borderColor: '#7FC4EF',
                borderOpacity: 0.7,
                padding: { left: 5, right: 5, top: 0, bottom: 0 }
              }
            },
            {
              dataField: 'temperature',
              symbolType: 'square',
              labels:
              {
                visible: true,
                backgroundColor: '#FEFEFE',
                backgroundOpacity: 0.2,
                borderColor: '#7FC4EF',
                borderOpacity: 0.7,
                padding: { left: 5, right: 5, top: 0, bottom: 0 }
              }
            },
            {
              dataField: 'fall',
              symbolType: 'square',
              labels:
              {
                visible: true,
                backgroundColor: '#FEFEFE',
                backgroundOpacity: 0.2,
                borderColor: '#7FC4EF',
                borderOpacity: 0.7,
                padding: { left: 5, right: 5, top: 0, bottom: 0 }
              }
            }
          ]
      }
    ];

  //   xAxis: any =
  // {
  //   dataField: 'Date',
  //   unitInterval: 1,
  //   tickMarks: { visible: true, interval: 1 },
  //   gridLinesInterval: { visible: true, interval: 1 },
  //   valuesOnTicks: false,
  //   padding: { bottom: 10 }
  // };
  // valueAxis: any =
  // {
  //   unitInterval: 10,
  //   minValue: 0,
  //   title: { text: 'Unite<br><br>' },
  //   labels: { horizontalAlignment: 'right' }
  // };
  // seriesGroups: any[] =
  //   [
  //     {
  //       type: 'line',
  //       series:
  //         [
  //           {
  //             dataField: 'Heart_Rate',
  //             symbolType: 'square',
  //             labels:
  //             {
  //               visible: true,
  //               backgroundColor: '#FEFEFE',
  //               backgroundOpacity: 0.2,
  //               borderColor: '#7FC4EF',
  //               borderOpacity: 0.7,
  //               padding: { left: 5, right: 5, top: 0, bottom: 0 }
  //             }
  //           },
  //           {
  //             dataField: 'Skin_Conductivity',
  //             symbolType: 'square',
  //             labels:
  //             {
  //               visible: true,
  //               backgroundColor: '#FEFEFE',
  //               backgroundOpacity: 0.2,
  //               borderColor: '#7FC4EF',
  //               borderOpacity: 0.7,
  //               padding: { left: 5, right: 5, top: 0, bottom: 0 }
  //             }
  //           },
  //           {
  //             dataField: 'Blood_Sugar',
  //             symbolType: 'square',
  //             labels:
  //             {
  //               visible: true,
  //               backgroundColor: '#FEFEFE',
  //               backgroundOpacity: 0.2,
  //               borderColor: '#7FC4EF',
  //               borderOpacity: 0.7,
  //               padding: { left: 5, right: 5, top: 0, bottom: 0 }
  //             }
  //           },
  //           {
  //             dataField: 'Body_Temperature',
  //             symbolType: 'square',
  //             labels:
  //             {
  //               visible: true,
  //               backgroundColor: '#FEFEFE',
  //               backgroundOpacity: 0.2,
  //               borderColor: '#7FC4EF',
  //               borderOpacity: 0.7,
  //               padding: { left: 5, right: 5, top: 0, bottom: 0 }
  //             }
  //           },
  //           {
  //             dataField: 'Blood_Pressure',
  //             symbolType: 'square',
  //             labels:
  //             {
  //               visible: true,
  //               backgroundColor: '#FEFEFE',
  //               backgroundOpacity: 0.2,
  //               borderColor: '#7FC4EF',
  //               borderOpacity: 0.7,
  //               padding: { left: 5, right: 5, top: 0, bottom: 0 }
  //             }
  //           }
  //         ]
  //     }
  //   ];
}