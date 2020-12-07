import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  public deviceForm: FormGroup;
  public deviceData: any;

  constructor(
    private formBuilder: FormBuilder,
  ) { }


  ngOnInit(): void {
    this.deviceForm = this.formBuilder.group({
      type: [''],
      name: [''],
    });
  }

  createDevices(formValues){
    console.log(formValues);
    //Create Devices
    if(formValues.type !== '' && formValues.name !== ''){
      var deviceInfo = JSON.parse(window.localStorage.getItem('deviceData')) || [];
      var deviceInfoLength =  deviceInfo.filter(function(deviceName) {
        if(deviceName.name == formValues.name){
          window.alert("msg: Device"+''+formValues.name+''+" already exists");
          return deviceName
        } 
      });

    if(formValues.type === 'PHONE'){
     window.alert("msg type 'PHONE' is not supported Code:400")
    }

    if(deviceInfoLength.length === 0){
      if(formValues.type !== 'PHONE')
      {
        deviceInfo.push(formValues);
      }
      window.alert("msg : Successfully added "+ formValues.name +''+"Code: 200");
      window.localStorage.setItem('deviceData', JSON.stringify(deviceInfo));
    }
    }else{
      window.alert("msg : Invalid Command. "+''+"Code: 400");
    }


  }
  


}
