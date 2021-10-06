import { InvoiceModel } from './../invoice.model';
import { InvoiceService } from './../invoice.service';
import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
@Component({
  selector: "app-invoice-list",
  templateUrl: "./invoice-list.component.html",
  styleUrls: ["./invoice-list.component.scss"],
})
export class InvoiceListComponent implements OnInit {
  displayedColumns: string[] = [
    "invoice_number",
    "serie",
    "ncm_sh",
    "cfop",
    "qtd",
    "natureOfOperation",
    "unit",
    "freight",
    "value_unit",
    "product",
    "client",
    "issueDate",
    "acoes"
  ];

  dataSource: InvoiceModel[]

  invoices: InvoiceModel[] = []

  constructor(private service: InvoiceService, private router: Router) {}

  ngOnInit() {

    this.getAllInvoices()
  }


  getAllInvoices() {
    this.service.getAll().subscribe(res => {
      this.invoices = res
      this.dataSource = res
    })
  }



  goToNew() {
    this.router.navigate(['/pages/invoice/new'])
  }
}
