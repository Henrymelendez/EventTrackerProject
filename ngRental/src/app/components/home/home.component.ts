
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { computeStyles } from '@popperjs/core';
import { Property } from 'src/app/models/property';
import { PropertyAveragePipe } from 'src/app/pipes/property-average.pipe';
import { PropertysumPipe } from 'src/app/pipes/propertysum.pipe';
import { PropertiesService } from 'src/app/services/properties.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  properties: Property[] =[];

  selectedProp: null | Property = null;
  editProp: null | Property = null;

  showActive: boolean =false;
  newProp: Property = new Property();






  constructor(
    private propSvc : PropertiesService,
    private route: ActivatedRoute,
    private router: Router,
    private propAverPipe: PropertyAveragePipe,
    private propSumPipe: PropertysumPipe

  ) { }

  ngOnInit(): void {
    this.reload();

  }

  reload():void {
    this.propSvc.index().subscribe(
      {
        next: (props) => {
          this.properties = props;
        },
        error: (problem) => {
          console.error("HomeHttpComponent.reload(): error loading lists: ");
          console.error(problem);

        }
      }
    );
  }



displayProperty(prop: Property){
  return this.selectedProp = prop;
}


displayTable(){
  this.selectedProp = null;

}


setEditProp(){
  this.editProp = Object.assign({}, this.selectedProp);
}

deleteProperty(id : number):void{
    this.propSvc.destroy(id).subscribe({
      next: (props) => {

        this.reload();
      },
      error: (err) => {
        console.error('PropertyHtttpComponent.deleteProperty(): Error deleting Property' + err);
      }

    });

}

updateProperty(prop: Property){
  console.log(prop.id)
  console.log(prop);
  this.propSvc.update(prop).subscribe({
    next: (props) => {
      this.reload();
      this.newProp = new Property();
    },
    error: (err) => {
      console.error('PropertyHttmpComponent,updateProperty(): Error Updating Property' );
      console.error(err);


    }
  })
}


addProperty(prop: Property): void{
  this.propSvc.create(prop).subscribe({
    next: (result) => {
      this.newProp = new Property();
      this.reload()
    },
    error: (err) => {
      console.error("PropertyHomeComponent.arrProperty: Error creating Property");
      console.error(err);


    }
  })
}

PropertySum(props: Property[], attr: string): number{
  let result = this.propAverPipe.transform(props, attr);
  return result;
}

PropertyAverage(props: Property[], attr : string): number {
  let result = this.propSumPipe.transform(props, attr);
  return result;
}

}
