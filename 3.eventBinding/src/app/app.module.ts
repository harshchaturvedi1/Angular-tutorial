import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { PassingDataComponent } from './component-interaction/passing-data/passing-data.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { EmployeeDetailComponent } from './services/employee-detail/employee-detail.component';
import { EmployeeListComponent } from './services/employee-list/employee-list.component';
import { EmployeeService } from './services/employee.service';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TemplateReferenceVariableComponent,
    TwoWayBindingComponent,
    StructuralDirectiveComponent,
    ComponentInteractionComponent,
    PassingDataComponent,
    PipesComponent,
    ServicesComponent,
    EmployeeDetailComponent,
    EmployeeListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
