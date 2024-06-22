export const prettyNumber = (num: number) => {
  return new Intl.NumberFormat("en-za", {
    style: "currency",
    currency: "ZAR",
  }).format(num);
};

export const prettyDate = (date: Date) => {
  return new Date(date).toLocaleDateString("en-za", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const prettyArrayTotal = (array: any[], key: string) => {
  return array.reduce((acc, curr) => acc + Number(curr[key]), 0);
};

export const generateDashboardData = (payrollData: any[]) => {
  const team = {};
  let earnings: any[] = [];
  let deductions: any[] = [];
  let uif: any[] = [];
  let tax: any[] = [];
  let payroll_distribution = null;
  let team_distribution: any[] = [];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let teams: any[] = payrollData
    .reduce(
      (result: any, currentValue: any) => result.concat(currentValue.team),
      []
    )
    .sort();

  const _teams = (teams: string[]): string[] => {
    return teams.filter(
      (item: string, index: number) => teams.indexOf(item) === index
    );
  };

  teams = _teams(teams).map((team) => {
    return {
      name: team,
      value: 0,
    };
  });

  const totals = [
    {
      name: "Earnings",
      value: 0,
    },
    {
      name: "PAYE",
      value: 0,
    },
    {
      name: "UIF",
      value: 0,
    },
  ];

  payrollData.map((employee) => {
    earnings = employee.payroll.reduce((result: any, currentValue: any) => {
      const date = monthNames[new Date(currentValue.date).getMonth()];
      (result[`${date}`] = result[`${date}`] || []).push({
        date: currentValue.date,
        name: date,
        amount: currentValue.amount,
      });
      return result;
    }, {});
    tax = employee.payroll.reduce((result: any, currentValue: any) => {
      const date = monthNames[new Date(currentValue.date).getMonth()];
      (result[`${date}`] = result[`${date}`] || []).push({
        date: currentValue.date,
        name: "Tax",
        value: currentValue.tax,
      });
      return result;
    }, {});
    uif = employee.payroll.reduce((result: any, currentValue: any) => {
      const date = monthNames[new Date(currentValue.date).getMonth()];
      (result[`${date}`] = result[`${date}`] || []).push({
        date: currentValue.date,
        name: "PAYE",
        value: currentValue.uif,
      });
      return result;
    }, {});
    employee.payroll.forEach((item: any, index: number) => {
      totals[0].value += Number(item.amount);
      totals[1].value += Number(item.tax);
      totals[2].value += Number(item.uif);
    });

    teams.forEach((team) => {
      if (team.name === employee.team) {
        team.value += Number(employee.total);
      }
    });
  });
  console.log("teams: ", teams);
  payroll_distribution = totals;
  team_distribution = teams;

  return {
    team,
    earnings,
    deductions,
    uif,
    tax,
    payroll_distribution,
    team_distribution,
  };
};
