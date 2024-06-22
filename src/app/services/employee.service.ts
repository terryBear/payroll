import { Injectable } from "@angular/core";
import { faker } from "@faker-js/faker";
import { prettyArrayTotal } from "../utils/transformers";

const employees = Array.from({ length: 100 }, (__, index) => ({
  id: index + 2,
  "Employee Id": `E00${index + 2}`,
  firstname: faker.person.firstName(),
  lastname: faker.person.lastName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  team: faker.company.buzzNoun(),
  address:
    faker.location.streetAddress() +
    ", " +
    faker.location.city() +
    ", " +
    faker.location.country(),
}));

const employeePayroll = [
  ...employees.map((employee) => {
    const _payroll = Array.from({ length: 34 }, (___, _ind) => ({
      id: _ind + 2,
      date: faker.date.past(),
      amount: faker.finance.amount({
        min: 100000,
        max: 200000,
      }),
      uif: faker.finance.amount({
        min: 1000,
        max: 2000,
      }),
      tax: faker.finance.amount({
        min: 10000,
        max: 20000,
      }),
    }));
    const summary = {
      earnings: prettyArrayTotal(_payroll, "amount"),
      uif: prettyArrayTotal(_payroll, "uif"),
      tax: prettyArrayTotal(_payroll, "tax"),
    };
    return {
      ...employee,
      image: faker.image.avatar(),
      payroll: _payroll,
      ...summary,
      deductions: summary.uif + summary.tax,
      total: summary.earnings - (summary.uif + summary.tax),
    };
  }),
];

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  constructor() {}

  getEmployees() {
    return employees;
  }

  getEmployeeById(id: number) {
    return employeePayroll.filter((employee) => employee.id === id)[0];
  }

  getEmployeePayroll() {
    return employeePayroll;
  }
}
