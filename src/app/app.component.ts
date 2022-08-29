import {Component, ElementRef, ViewChild,OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO';
  inputForm:FormGroup;
  @ViewChild("task", {static: true}) task: ElementRef;
  list: any[] = [];
  max:boolean=false;

  public addTask(item: string) {
    this.list.push({id:this.list.length,name:item})
    console.log('task',this.task)
    this.task.nativeElement.value = null;
    console.log(this.inputForm)
  }

  public onRemove(id: number) {
    this.list = this.list.filter(item => item.id !== id)
  }
  public disabledButton(): boolean  {
    if (this.task.nativeElement.value == '') {
      return true
    }
    return false
  };
  public onEdit(id: number) {
    let tittle = this.list[id].name;
    let result=prompt("Edit Task",tittle);
    if (result !== null && result !== "") {
      this.list[id].name = result;
    }
  }



  ngOnInit():void{
    this.inputForm=new FormGroup({
      'task': new FormControl(null,[Validators.required,Validators.maxLength(60)])
    })
  }

}
