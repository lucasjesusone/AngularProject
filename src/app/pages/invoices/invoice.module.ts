import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { InvoiceRoutingModule } from "./invoice-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NbIconModule, NbTooltipModule } from "@nebular/theme";
import { MatCardModule } from '@angular/material/card';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    MatTableModule,
    MatPaginatorModule,
    InvoiceRoutingModule,
    NbIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
  ],
  declarations: [InvoiceRoutingModule.components],
})
export class InvoiceModule {}
