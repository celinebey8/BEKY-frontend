import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  @Input() patientData;

  constructor() { }

  ngOnInit(): void {
    console.log(this.patientData);
  }

  sampleData: any[] = [
    { Day: 'Monday', Skin_Conductivity: 30, Heart_Rate: 10, Blood_Sugar: 25, Body_Temperature: 40, Blood_Pressure: 11 },
    { Day: 'Tuesday', Skin_Conductivity: 25, Heart_Rate: 15, Blood_Sugar: 10, Body_Temperature: 50, Blood_Pressure: 12 },
    { Day: 'Wednesday', Skin_Conductivity: 30, Heart_Rate: 10, Blood_Sugar: 25, Body_Temperature: 60, Blood_Pressure: 13 },
    { Day: 'Thursday', Skin_Conductivity: 40, Heart_Rate: 20, Blood_Sugar: 25, Body_Temperature: 40, Blood_Pressure: 10 },
    { Day: 'Friday', Skin_Conductivity: 45, Heart_Rate: 20, Blood_Sugar: 25, Body_Temperature: 50, Blood_Pressure: 14 },
    { Day: 'Saturday', Skin_Conductivity: 30, Heart_Rate: 20, Blood_Sugar: 30, Body_Temperature: 60, Blood_Pressure: 10 },
    { Day: 'Sunday', Skin_Conductivity: 20, Heart_Rate: 30, Blood_Sugar: 10, Body_Temperature: 90, Blood_Pressure: 11 }
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
      dataField: 'Day',
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
      title: { text: 'Unite<br><br>' },
      labels: { horizontalAlignment: 'right' }
    };
  seriesGroups: any[] =
    [
      {
        type: 'line',
        series:
          [
            {
              dataField: 'Heart_Rate',
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
              dataField: 'Skin_Conductivity',
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
              dataField: 'Blood_Sugar',
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
              dataField: 'Body_Temperature',
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
              dataField: 'Blood_Pressure',
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
}