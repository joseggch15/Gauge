export const dashboardJson = {
  name: "General Dashboard",
  description: null,
  id: 12,
  parameters: [
    {
      slug: "date_filter",
      default: "2021-05-01~2021-07-31",
      name: "Date Filter",
      type: "date/range",
      sectionId: "date",
      id: "7da13cd7",
      field_ids: [1593, 1591],
      field_id: null,
      hasOnlyFieldTargets: false
    },
    {
      name: "Company Location",
      slug: "company_location",
      id: "5b0c3613",
      type: "category",
      field_ids: [1590],
      field_id: 1590,
      hasOnlyFieldTargets: true
    },
    { name: "Job Level", slug: "job_level", id: "5d935e00", type: "category" },
    { name: "Job Title", slug: "job_title", id: "b952228e", type: "category" },
    { name: "Organization", slug: "organization", id: "d33b986f", type: "category" }
  ],
  ordered_cards: [
    {
      sizeX: 9,
      series: [],
      card: {
        id: 106,
        name: "Trend Monthly Average Employee Working Hour [Native]",
        description: "Average working hours in given date filter",
        display: "scalar",
        visualization_settings: {
          "table.pivot_column": "avg_working_hour",
          "table.cell_column": "grouped_date",
          "scalar.switch_positive_negative": false,
          "card.title": "Average Working Hours",
          "card.description": "Average working hours in given date filter",
          column_settings: { '["name","avg_working_hour"]': { suffix: " hours" } }
        },
        dataset_query: {
          type: "native",
          native: {
            "template-tags": {
              company_location: {
                id: "0e748d30-071b-e0e2-16c7-52a4de03cbc0",
                name: "company_location",
                "display-name": "Company location",
                type: "dimension",
                dimension: ["field", 1590, null],
                "widget-type": "category"
              },
              job_level: {
                id: "300eba70-ae7c-c35b-85ab-7c786a51bddd",
                name: "job_level",
                "display-name": "Job level",
                type: "dimension",
                dimension: ["field", 1584, null],
                "widget-type": "category"
              },
              job_title: {
                id: "8e4840ee-025a-2564-38ab-1dbbfa4bda55",
                name: "job_title",
                "display-name": "Job title",
                type: "dimension",
                dimension: ["field", 1581, null],
                "widget-type": "category"
              },
              organization: {
                id: "f3c10efa-1664-bc6e-9113-b20128769ffd",
                name: "organization",
                "display-name": "Organization",
                type: "dimension",
                dimension: ["field", 1589, null],
                "widget-type": "category"
              },
              employee_ID: {
                id: "dda133ce-4962-0a7d-91e4-7e0dd3984982",
                name: "employee_ID",
                "display-name": "Employee ID",
                type: "dimension",
                dimension: ["field", 1587, null],
                "widget-type": "category"
              },
              employee_name: {
                id: "9536874a-f853-7aeb-8098-a75a5be8dfd1",
                name: "employee_name",
                "display-name": "Employee name",
                type: "dimension",
                dimension: ["field", 1588, null],
                "widget-type": "category"
              },
              attendance_date: {
                id: "d35f5a65-f640-94b9-ec8a-17389ba3d407",
                name: "attendance_date",
                "display-name": "Attendance date",
                type: "dimension",
                dimension: ["field", 1591, null],
                "widget-type": "date/all-options"
              }
            }
          }
        }
      },
      col: 0,
      id: 116,
      parameter_mappings: [
        { parameter_id: "5b0c3613", card_id: 106, target: ["dimension", ["template-tag", "company_location"]] },
        { parameter_id: "5d935e00", card_id: 106, target: ["dimension", ["template-tag", "job_level"]] },
        { parameter_id: "b952228e", card_id: 106, target: ["dimension", ["template-tag", "job_title"]] },
        { parameter_id: "d33b986f", card_id: 106, target: ["dimension", ["template-tag", "organization"]] },
        { parameter_id: "7da13cd7", card_id: 106, target: ["dimension", ["template-tag", "attendance_date"]] }
      ],
      card_id: 106,
      visualization_settings: {
        "table.pivot_column": "avg_working_hour",
        "table.cell_column": "grouped_date",
        "scalar.switch_positive_negative": false,
        "card.title": "Average Working Hours",
        "card.description": "Average working hours in given date filter",
        column_settings: { '["name","avg_working_hour"]': { suffix: " hours" } }
      },
      dashboard_id: 12,
      sizeY: 3,
      row: 0
    },
    {
      sizeX: 6,
      series: [],
      card: {
        id: 108,
        name: "Table Employee Most Come Late [Native]",
        description:
          "This list only shows employees who have the highest count of Come Late in given date filter.  Click the employee id to see more details.",
        display: "table",
        visualization_settings: {
          "table.pivot_column": "avg_working_hour",
          "table.cell_column": "grouped_date",
          "scalar.switch_positive_negative": true,
          "card.title": "Employee with Most Come Late",
          "card.description": "Click the employee ID to see more details.",
          column_settings: {
            '["name","employee_id"]': {
              column_title: "Employee ID",
              click_behavior: {
                targetId: 14,
                parameterMapping: {
                  b39a0087: {
                    source: { type: "parameter", id: "7da13cd7", name: "Date Filter" },
                    target: { type: "parameter", id: "b39a0087" },
                    id: "b39a0087"
                  },
                  "8b4d388f": {
                    source: { type: "parameter", id: "a4cf11aa", name: "Date Filter" },
                    target: { type: "parameter", id: "8b4d388f" },
                    id: "8b4d388f"
                  },
                  "19111ec7": {
                    source: { type: "column", id: "employee_id", name: "employee_id" },
                    target: { type: "parameter", id: "19111ec7" },
                    id: "19111ec7"
                  },
                  "27ddb10c": {
                    source: { type: "parameter", id: "b27bf50d", name: "Group Date" },
                    target: { type: "parameter", id: "27ddb10c" },
                    id: "27ddb10c"
                  },
                  ef965886: {
                    source: { type: "column", id: "employee_name", name: "employee_name" },
                    target: { type: "parameter", id: "ef965886" },
                    id: "ef965886"
                  }
                },
                linkType: "dashboard",
                type: "link"
              }
            },
            '["name","employee_name"]': { column_title: "Employee Name" },
            '["name","count"]': { show_mini_bar: false }
          }
        },
        dataset_query: {
          type: "native",
          native: {
            "template-tags": {
              calendar_date: {
                id: "a6c3f492-a8b4-2282-4d9a-556c6d01edd9",
                name: "calendar_date",
                "display-name": "Calendar date",
                type: "dimension",
                dimension: ["field", 1591, null],
                "widget-type": "date/range",
                required: false
              },
              company_location: {
                id: "bfb5e7bd-a9a2-8978-1529-7add58cde8db",
                name: "company_location",
                "display-name": "Company location",
                type: "dimension",
                dimension: ["field", 1590, null],
                "widget-type": "category"
              },
              job_level: {
                id: "f0c9390e-6ecf-97e9-a643-e6dcbf6dcde2",
                name: "job_level",
                "display-name": "Job level",
                type: "dimension",
                dimension: ["field", 1584, null],
                "widget-type": "category"
              },
              job_title: {
                id: "249d3bdc-108c-6365-61c6-c4bb87c75cc4",
                name: "job_title",
                "display-name": "Job title",
                type: "dimension",
                dimension: ["field", 1581, null],
                "widget-type": "category"
              },
              organization: {
                id: "527718ce-9309-6138-7e7a-9e84a99ad274",
                name: "organization",
                "display-name": "Organization",
                type: "dimension",
                dimension: ["field", 1589, null],
                "widget-type": "category"
              },
              employee_ID: {
                id: "373138a4-41c9-540d-ebe6-76ffb595a60c",
                name: "employee_ID",
                "display-name": "Employee",
                type: "dimension",
                dimension: ["field", 1587, null],
                "widget-type": "category"
              }
            }
          }
        }
      },
      col: 0,
      id: 118,
      parameter_mappings: [
        { parameter_id: "5b0c3613", card_id: 108, target: ["dimension", ["template-tag", "company_location"]] },
        { parameter_id: "5d935e00", card_id: 108, target: ["dimension", ["template-tag", "job_level"]] },
        { parameter_id: "b952228e", card_id: 108, target: ["dimension", ["template-tag", "job_title"]] },
        { parameter_id: "d33b986f", card_id: 108, target: ["dimension", ["template-tag", "organization"]] },
        { parameter_id: "7da13cd7", card_id: 108, target: ["dimension", ["template-tag", "calendar_date"]] }
      ],
      card_id: 108,
      visualization_settings: {
        "table.pivot_column": "avg_working_hour",
        "table.cell_column": "grouped_date",
        "scalar.switch_positive_negative": true,
        "card.title": "Employee with Most Come Late",
        "card.description":
          "This list only shows employees who have the highest count of Come Late in given date filter. Click the Employee-ID to see more details",
        column_settings: {
          '["name","employee_id"]': {
            column_title: "Employee ID",
            click_behavior: {
              targetId: 14,
              parameterMapping: {
                b39a0087: {
                  source: { type: "parameter", id: "7da13cd7", name: "Date Filter" },
                  target: { type: "parameter", id: "b39a0087" },
                  id: "b39a0087"
                },
                "8b4d388f": {
                  source: { type: "parameter", id: "a4cf11aa", name: "Date Filter" },
                  target: { type: "parameter", id: "8b4d388f" },
                  id: "8b4d388f"
                },
                "19111ec7": {
                  source: { type: "column", id: "employee_id", name: "employee_id" },
                  target: { type: "parameter", id: "19111ec7" },
                  id: "19111ec7"
                },
                "27ddb10c": {
                  source: { type: "parameter", id: "b27bf50d", name: "Group Date" },
                  target: { type: "parameter", id: "27ddb10c" },
                  id: "27ddb10c"
                },
                ef965886: {
                  source: { type: "column", id: "employee_name", name: "employee_name" },
                  target: { type: "parameter", id: "ef965886" },
                  id: "ef965886"
                }
              },
              linkType: "dashboard",
              type: "link"
            }
          },
          '["name","employee_name"]': { column_title: "Employee Name" },
          '["name","count"]': { show_mini_bar: false }
        }
      },
      dashboard_id: 12,
      sizeY: 7,
      row: 36
    },
    {
      sizeX: 18,
      series: [],
      card: {
        id: 109,
        name: "Line Weekly Average of Employee Attendance History [Native]",
        description: null,
        display: "line",
        visualization_settings: {
          "graph.y_axis.title_text": "Number of Employee",
          click_behavior: {
            targetId: 50,
            parameterMapping: {
              "30bbbe51": {
                source: { type: "parameter", id: "b952228e", name: "Job Title" },
                target: { type: "parameter", id: "30bbbe51" },
                id: "30bbbe51"
              },
              "5f49b9ca": {
                source: { type: "parameter", id: "5b0c3613", name: "Company Location" },
                target: { type: "parameter", id: "5f49b9ca" },
                id: "5f49b9ca"
              },
              fd4a65e7: {
                source: { type: "parameter", id: "5d935e00", name: "Job Level" },
                target: { type: "parameter", id: "fd4a65e7" },
                id: "fd4a65e7"
              },
              "5e35bf3e": {
                source: { type: "parameter", id: "d33b986f", name: "Organization" },
                target: { type: "parameter", id: "5e35bf3e" },
                id: "5e35bf3e"
              },
              c73f7eb8: {
                source: { type: "parameter", id: "7da13cd7", name: "Date Filter" },
                target: { type: "parameter", id: "c73f7eb8" },
                id: "c73f7eb8"
              }
            },
            linkType: "dashboard",
            type: "link"
          },
          "graph.x_axis.labels_enabled": false,
          "table.cell_column": "grouped_date",
          "graph.x_axis.title_text": "Period",
          "gauge.segments": [
            { min: 0, max: 0.05, color: "#84BB4C", label: "" },
            { min: 0.05, max: 0.25, color: "#F9CF48", label: "" },
            { min: 0.25, max: 1, color: "#ED6E6E", label: "" }
          ],
          "card.title": "Employee Presence History",
          "graph.metrics": ["Number of Employee"],
          "scalar.switch_positive_negative": false,
          "table.pivot_column": "avg_working_hour",
          column_settings: { '["name","average_percentage_employee_come_late"]': { number_style: "percent" } },
          series_settings: { "Come late": { color: "#509EE3" }, "Leave early": { color: "#A989C5" } },
          "graph.dimensions": ["Period", "Type"]
        },
        dataset_query: {
          type: "native",
          native: {
            "template-tags": {
              calendar_date: {
                id: "14922cfa-221a-5b38-6be4-acf1511ac25a",
                name: "calendar_date",
                "display-name": "Calendar date",
                type: "dimension",
                dimension: ["field", 1593, null],
                "widget-type": "date/range",
                required: false
              },
              company_location: {
                id: "0e748d30-071b-e0e2-16c7-52a4de03cbc0",
                name: "company_location",
                "display-name": "Company location",
                type: "dimension",
                dimension: ["field", 1590, null],
                "widget-type": "category"
              },
              job_level: {
                id: "300eba70-ae7c-c35b-85ab-7c786a51bddd",
                name: "job_level",
                "display-name": "Job level",
                type: "dimension",
                dimension: ["field", 1584, null],
                "widget-type": "category"
              },
              job_title: {
                id: "8e4840ee-025a-2564-38ab-1dbbfa4bda55",
                name: "job_title",
                "display-name": "Job title",
                type: "dimension",
                dimension: ["field", 1581, null],
                "widget-type": "category"
              },
              organization: {
                id: "f3c10efa-1664-bc6e-9113-b20128769ffd",
                name: "organization",
                "display-name": "Organization",
                type: "dimension",
                dimension: ["field", 1589, null],
                "widget-type": "category"
              },
              employee_id: {
                id: "0a492576-706f-ce97-7677-0fab98f0e65c",
                name: "employee_id",
                "display-name": "Employee id",
                type: "dimension",
                dimension: ["field", 1587, null],
                "widget-type": "category"
              }
            }
          }
        }
      },
      col: 0,
      id: 119,
      parameter_mappings: [
        { parameter_id: "5b0c3613", card_id: 109, target: ["dimension", ["template-tag", "company_location"]] },
        { parameter_id: "5d935e00", card_id: 109, target: ["dimension", ["template-tag", "job_level"]] },
        { parameter_id: "b952228e", card_id: 109, target: ["dimension", ["template-tag", "job_title"]] },
        { parameter_id: "d33b986f", card_id: 109, target: ["dimension", ["template-tag", "organization"]] },
        { parameter_id: "7da13cd7", card_id: 109, target: ["dimension", ["template-tag", "calendar_date"]] }
      ],
      card_id: 109,
      visualization_settings: {
        "graph.y_axis.title_text": "Number of Employee",
        click_behavior: {
          targetId: 50,
          parameterMapping: {
            "30bbbe51": {
              source: { type: "parameter", id: "b952228e", name: "Job Title" },
              target: { type: "parameter", id: "30bbbe51" },
              id: "30bbbe51"
            },
            "5f49b9ca": {
              source: { type: "parameter", id: "5b0c3613", name: "Company Location" },
              target: { type: "parameter", id: "5f49b9ca" },
              id: "5f49b9ca"
            },
            fd4a65e7: {
              source: { type: "parameter", id: "5d935e00", name: "Job Level" },
              target: { type: "parameter", id: "fd4a65e7" },
              id: "fd4a65e7"
            },
            "5e35bf3e": {
              source: { type: "parameter", id: "d33b986f", name: "Organization" },
              target: { type: "parameter", id: "5e35bf3e" },
              id: "5e35bf3e"
            },
            c73f7eb8: {
              source: { type: "parameter", id: "7da13cd7", name: "Date Filter" },
              target: { type: "parameter", id: "c73f7eb8" },
              id: "c73f7eb8"
            }
          },
          linkType: "dashboard",
          type: "link"
        },
        "graph.x_axis.labels_enabled": false,
        "table.cell_column": "grouped_date",
        "graph.x_axis.title_text": "Period",
        "gauge.segments": [
          { min: 0, max: 0.05, color: "#84BB4C", label: "" },
          { min: 0.05, max: 0.25, color: "#F9CF48", label: "" },
          { min: 0.25, max: 1, color: "#ED6E6E", label: "" }
        ],
        "card.title": "Employee Presence History",
        "graph.metrics": ["Number of Employee"],
        "scalar.switch_positive_negative": false,
        "card.description": "Click the line chart to see more details.",
        "table.pivot_column": "avg_working_hour",
        column_settings: { '["name","average_percentage_employee_come_late"]': { number_style: "percent" } },
        series_settings: { "Come late": { color: "#509EE3" }, "Leave early": { color: "#A989C5" } },
        "graph.dimensions": ["Period", "Type"]
      },
      dashboard_id: 12,
      sizeY: 6,
      row: 21
    },
    {
      sizeX: 6,
      series: [],
      card: {
        id: 110,
        name: "Table Employee Most Leave Early [Native]",
        description:
          "This list only shows employees who have the highest count of Leave Early in given date filter. Click the employee id to see more details.",
        display: "table",
        visualization_settings: {
          "table.pivot_column": "avg_working_hour",
          "table.cell_column": "grouped_date",
          "scalar.switch_positive_negative": true,
          "card.title": "Employee with Most Leave Early",
          "card.description": "Click the employee ID to see more details.",
          column_settings: {
            '["name","employee_id"]': {
              column_title: "Employee ID",
              click_behavior: {
                targetId: 14,
                parameterMapping: {
                  b39a0087: {
                    source: { type: "parameter", id: "7da13cd7", name: "Date Filter" },
                    target: { type: "parameter", id: "b39a0087" },
                    id: "b39a0087"
                  },
                  "27ddb10c": {
                    source: { type: "parameter", id: "b27bf50d", name: "Group Date" },
                    target: { type: "parameter", id: "27ddb10c" },
                    id: "27ddb10c"
                  },
                  "8b4d388f": {
                    source: { type: "parameter", id: "a4cf11aa", name: "Date Filter" },
                    target: { type: "parameter", id: "8b4d388f" },
                    id: "8b4d388f"
                  },
                  "19111ec7": {
                    source: { type: "column", id: "employee_id", name: "employee_id" },
                    target: { type: "parameter", id: "19111ec7" },
                    id: "19111ec7"
                  },
                  ef965886: {
                    source: { type: "column", id: "employee_name", name: "employee_name" },
                    target: { type: "parameter", id: "ef965886" },
                    id: "ef965886"
                  }
                },
                linkType: "dashboard",
                type: "link"
              }
            },
            '["name","employee_name"]': { column_title: "Employee Name" },
            '["name","count"]': { show_mini_bar: true }
          }
        },
        dataset_query: {
          type: "native",
          native: {
            "template-tags": {
              calendar_date: {
                id: "a6c3f492-a8b4-2282-4d9a-556c6d01edd9",
                name: "calendar_date",
                "display-name": "Calendar date",
                type: "dimension",
                dimension: ["field", 1591, null],
                "widget-type": "date/range",
                required: false
              },
              company_location: {
                id: "bfb5e7bd-a9a2-8978-1529-7add58cde8db",
                name: "company_location",
                "display-name": "Company location",
                type: "dimension",
                dimension: ["field", 1590, null],
                "widget-type": "category"
              },
              job_level: {
                id: "f0c9390e-6ecf-97e9-a643-e6dcbf6dcde2",
                name: "job_level",
                "display-name": "Job level",
                type: "dimension",
                dimension: ["field", 1584, null],
                "widget-type": "category"
              },
              job_title: {
                id: "249d3bdc-108c-6365-61c6-c4bb87c75cc4",
                name: "job_title",
                "display-name": "Job title",
                type: "dimension",
                dimension: ["field", 1581, null],
                "widget-type": "category"
              },
              organization: {
                id: "527718ce-9309-6138-7e7a-9e84a99ad274",
                name: "organization",
                "display-name": "Organization",
                type: "dimension",
                dimension: ["field", 1589, null],
                "widget-type": "category"
              },
              employee_ID: {
                id: "94b1ca37-e74d-eafc-1bc9-2e61de82bb51",
                name: "employee_ID",
                "display-name": "Employee",
                type: "dimension",
                dimension: ["field", 1587, null],
                "widget-type": "category"
              }
            }
          }
        }
      },
      col: 6,
      id: 120,
      parameter_mappings: [
        { parameter_id: "5b0c3613", card_id: 110, target: ["dimension", ["template-tag", "company_location"]] },
        { parameter_id: "5d935e00", card_id: 110, target: ["dimension", ["template-tag", "job_level"]] },
        { parameter_id: "b952228e", card_id: 110, target: ["dimension", ["template-tag", "job_title"]] },
        { parameter_id: "d33b986f", card_id: 110, target: ["dimension", ["template-tag", "organization"]] },
        { parameter_id: "7da13cd7", card_id: 110, target: ["dimension", ["template-tag", "calendar_date"]] }
      ],
      card_id: 110,
      visualization_settings: {
        "table.pivot_column": "avg_working_hour",
        "table.cell_column": "grouped_date",
        "scalar.switch_positive_negative": true,
        "card.title": "Employee with Most Leave Early",
        "card.description":
          "This list only shows employees who have the highest count of Leave Early in given date filter. Click the Employee-ID to see more details",
        column_settings: {
          '["name","employee_id"]': {
            column_title: "Employee ID",
            click_behavior: {
              targetId: 14,
              parameterMapping: {
                b39a0087: {
                  source: { type: "parameter", id: "7da13cd7", name: "Date Filter" },
                  target: { type: "parameter", id: "b39a0087" },
                  id: "b39a0087"
                },
                "27ddb10c": {
                  source: { type: "parameter", id: "b27bf50d", name: "Group Date" },
                  target: { type: "parameter", id: "27ddb10c" },
                  id: "27ddb10c"
                },
                "8b4d388f": {
                  source: { type: "parameter", id: "a4cf11aa", name: "Date Filter" },
                  target: { type: "parameter", id: "8b4d388f" },
                  id: "8b4d388f"
                },
                "19111ec7": {
                  source: { type: "column", id: "employee_id", name: "employee_id" },
                  target: { type: "parameter", id: "19111ec7" },
                  id: "19111ec7"
                },
                ef965886: {
                  source: { type: "column", id: "employee_name", name: "employee_name" },
                  target: { type: "parameter", id: "ef965886" },
                  id: "ef965886"
                }
              },
              linkType: "dashboard",
              type: "link"
            }
          },
          '["name","employee_name"]': { column_title: "Employee Name" },
          '["name","count"]': { show_mini_bar: true }
        }
      },
      dashboard_id: 12,
      sizeY: 7,
      row: 36
    },
    {
      sizeX: 6,
      series: [],
      card: {
        id: 111,
        name: "Trend Monthly Employee Incomplete Time Tracking [Native]",
        description:
          "Total number of employees who forgot to check-out in given date filter. Click the number to see more details.",
        display: "scalar",
        visualization_settings: {
          "table.pivot_column": "avg_working_hour",
          "table.cell_column": "grouped_date",
          "scalar.switch_positive_negative": true,
          "card.title": "Total Incomplete Time Tracking in Latest Month",
          click_behavior: {
            type: "link",
            linkType: "dashboard",
            parameterMapping: {
              "3aff110f": {
                source: { type: "parameter", id: "d33b986f", name: "Organization" },
                target: { type: "parameter", id: "3aff110f" },
                id: "3aff110f"
              },
              e692996a: {
                source: { type: "parameter", id: "5d935e00", name: "Job Level" },
                target: { type: "parameter", id: "e692996a" },
                id: "e692996a"
              },
              aa7550ad: {
                source: { type: "parameter", id: "a4cf11aa", name: "Date Filter" },
                target: { type: "parameter", id: "aa7550ad" },
                id: "aa7550ad"
              },
              "585d0259": {
                source: { type: "parameter", id: "5b0c3613", name: "Company Location" },
                target: { type: "parameter", id: "585d0259" },
                id: "585d0259"
              },
              "5bb23dca": {
                source: { type: "parameter", id: "b952228e", name: "Job Title" },
                target: { type: "parameter", id: "5bb23dca" },
                id: "5bb23dca"
              },
              "74f8f26a": {
                source: { type: "parameter", id: "7da13cd7", name: "Date Filter" },
                target: { type: "parameter", id: "74f8f26a" },
                id: "74f8f26a"
              }
            },
            targetId: 17
          },
          "card.description":
            "The value shown here is the latest month value of the date filter ( if provided ) compared to the previous month of it.  Click the value to see more details.",
          column_settings: { '["name","total_incomplete"]': { suffix: " people" } }
        },
        dataset_query: {
          type: "native",
          native: {
            "template-tags": {
              company_location: {
                id: "0e748d30-071b-e0e2-16c7-52a4de03cbc0",
                name: "company_location",
                "display-name": "Company location",
                type: "dimension",
                dimension: ["field", 1590, null],
                "widget-type": "category"
              },
              job_level: {
                id: "300eba70-ae7c-c35b-85ab-7c786a51bddd",
                name: "job_level",
                "display-name": "Job level",
                type: "dimension",
                dimension: ["field", 1584, null],
                "widget-type": "category"
              },
              job_title: {
                id: "8e4840ee-025a-2564-38ab-1dbbfa4bda55",
                name: "job_title",
                "display-name": "Job title",
                type: "dimension",
                dimension: ["field", 1581, null],
                "widget-type": "category"
              },
              organization: {
                id: "f3c10efa-1664-bc6e-9113-b20128769ffd",
                name: "organization",
                "display-name": "Organization",
                type: "dimension",
                dimension: ["field", 1589, null],
                "widget-type": "category"
              },
              employee_ID: {
                id: "2b8d441f-23a4-cb53-d891-37b9422a9a37",
                name: "employee_ID",
                "display-name": "Employee",
                type: "dimension",
                dimension: ["field", 1587, null],
                "widget-type": "category"
              },
              attendance_date: {
                id: "3822260b-7b31-2cc6-c736-20ecfb4d6d71",
                name: "attendance_date",
                "display-name": "Attendance date",
                type: "dimension",
                dimension: ["field", 1591, null],
                "widget-type": "date/all-options"
              }
            }
          }
        }
      },
      col: 12,
      id: 121,
      parameter_mappings: [
        { parameter_id: "5b0c3613", card_id: 111, target: ["dimension", ["template-tag", "company_location"]] },
        { parameter_id: "5d935e00", card_id: 111, target: ["dimension", ["template-tag", "job_level"]] },
        { parameter_id: "b952228e", card_id: 111, target: ["dimension", ["template-tag", "job_title"]] },
        { parameter_id: "d33b986f", card_id: 111, target: ["dimension", ["template-tag", "organization"]] },
        { parameter_id: "7da13cd7", card_id: 111, target: ["dimension", ["template-tag", "attendance_date"]] }
      ],
      card_id: 111,
      visualization_settings: {
        "table.pivot_column": "avg_working_hour",
        "table.cell_column": "grouped_date",
        "scalar.switch_positive_negative": true,
        "card.title": "Total Incomplete Time Tracking",
        click_behavior: {
          type: "link",
          linkType: "dashboard",
          parameterMapping: {
            "3aff110f": {
              source: { type: "parameter", id: "d33b986f", name: "Organization" },
              target: { type: "parameter", id: "3aff110f" },
              id: "3aff110f"
            },
            e692996a: {
              source: { type: "parameter", id: "5d935e00", name: "Job Level" },
              target: { type: "parameter", id: "e692996a" },
              id: "e692996a"
            },
            aa7550ad: {
              source: { type: "parameter", id: "a4cf11aa", name: "Date Filter" },
              target: { type: "parameter", id: "aa7550ad" },
              id: "aa7550ad"
            },
            "585d0259": {
              source: { type: "parameter", id: "5b0c3613", name: "Company Location" },
              target: { type: "parameter", id: "585d0259" },
              id: "585d0259"
            },
            "5bb23dca": {
              source: { type: "parameter", id: "b952228e", name: "Job Title" },
              target: { type: "parameter", id: "5bb23dca" },
              id: "5bb23dca"
            },
            "74f8f26a": {
              source: { type: "parameter", id: "7da13cd7", name: "Date Filter" },
              target: { type: "parameter", id: "74f8f26a" },
              id: "74f8f26a"
            }
          },
          targetId: 17
        },
        "card.description":
          "Total number of employees who forgot to check-out in given date filter. Click the number to see more details.",
        column_settings: { '["name","total_incomplete"]': { suffix: " people" } }
      },
      dashboard_id: 12,
      sizeY: 3,
      row: 33
    },
    {
      sizeX: 9,
      series: [],
      card: {
        id: 113,
        name: "Trend Monthly Sick Leave Taken [Native]",
        description: "Total sick leave taken in given date filter",
        display: "scalar",
        visualization_settings: {
          "table.pivot_column": "avg_working_hour",
          "table.cell_column": "grouped_date",
          "scalar.switch_positive_negative": true,
          "card.title": "Total Sick Leave Taken in Latest Month",
          click_behavior: {
            type: "link",
            linkType: "dashboard",
            parameterMapping: {
              "52478f10": {
                source: { type: "parameter", id: "d33b986f", name: "Organization" },
                target: { type: "parameter", id: "52478f10" },
                id: "52478f10"
              },
              "1d0effd6": {
                source: { type: "parameter", id: "5d935e00", name: "Job Level" },
                target: { type: "parameter", id: "1d0effd6" },
                id: "1d0effd6"
              },
              "659c3b67": {
                source: { type: "parameter", id: "a4cf11aa", name: "Date Filter" },
                target: { type: "parameter", id: "659c3b67" },
                id: "659c3b67"
              },
              ce11f27: {
                source: { type: "parameter", id: "5b0c3613", name: "Company Location" },
                target: { type: "parameter", id: "ce11f27" },
                id: "ce11f27"
              },
              c71947ad: {
                source: { type: "parameter", id: "b952228e", name: "Job Title" },
                target: { type: "parameter", id: "c71947ad" },
                id: "c71947ad"
              },
              "76dc5b72": {
                source: { type: "parameter", id: "7da13cd7", name: "Date Filter" },
                target: { type: "parameter", id: "76dc5b72" },
                id: "76dc5b72"
              }
            },
            targetId: 20
          },
          "card.description":
            "The value shown here is the last month value of the date filter ( if provided ) compared to the previous month of it. Click the value to see more details.",
          column_settings: { '["name","total_sick_leave"]': { suffix: " people" } }
        },
        dataset_query: {
          type: "native",
          native: {
            "template-tags": {
              company_location: {
                id: "bfb5e7bd-a9a2-8978-1529-7add58cde8db",
                name: "company_location",
                "display-name": "Company location",
                type: "dimension",
                dimension: ["field", 1590, null],
                "widget-type": "category"
              },
              job_level: {
                id: "f0c9390e-6ecf-97e9-a643-e6dcbf6dcde2",
                name: "job_level",
                "display-name": "Job level",
                type: "dimension",
                dimension: ["field", 1584, null],
                "widget-type": "category"
              },
              job_title: {
                id: "249d3bdc-108c-6365-61c6-c4bb87c75cc4",
                name: "job_title",
                "display-name": "Job title",
                type: "dimension",
                dimension: ["field", 1581, null],
                "widget-type": "category"
              },
              organization: {
                id: "527718ce-9309-6138-7e7a-9e84a99ad274",
                name: "organization",
                "display-name": "Organization",
                type: "dimension",
                dimension: ["field", 1589, null],
                "widget-type": "category"
              },
              employee_name: {
                id: "03e1d137-f29b-d8ef-9493-de7b0ae0d95b",
                name: "employee_name",
                "display-name": "Employee name",
                type: "dimension",
                dimension: ["field", 1588, null],
                "widget-type": "category"
              },
              employee_id: {
                id: "f9b7c5de-fa3a-e597-c416-f18228650050",
                name: "employee_id",
                "display-name": "Employee",
                type: "dimension",
                dimension: ["field", 1587, null],
                "widget-type": "category"
              },
              attendance_date: {
                id: "acaf8f0e-0184-b973-93f8-77e9e4240050",
                name: "attendance_date",
                "display-name": "Attendance date",
                type: "dimension",
                dimension: ["field", 1591, null],
                "widget-type": "date/all-options"
              }
            }
          }
        }
      },
      col: 9,
      id: 123,
      parameter_mappings: [
        { parameter_id: "5b0c3613", card_id: 113, target: ["dimension", ["template-tag", "company_location"]] },
        { parameter_id: "5d935e00", card_id: 113, target: ["dimension", ["template-tag", "job_level"]] },
        { parameter_id: "b952228e", card_id: 113, target: ["dimension", ["template-tag", "job_title"]] },
        { parameter_id: "d33b986f", card_id: 113, target: ["dimension", ["template-tag", "organization"]] },
        { parameter_id: "7da13cd7", card_id: 113, target: ["dimension", ["template-tag", "attendance_date"]] }
      ],
      card_id: 113,
      visualization_settings: {
        "table.pivot_column": "avg_working_hour",
        "table.cell_column": "grouped_date",
        "scalar.switch_positive_negative": true,
        "card.title": "Total Sick Leave Taken",
        click_behavior: {
          type: "link",
          linkType: "dashboard",
          parameterMapping: {
            "52478f10": {
              source: { type: "parameter", id: "d33b986f", name: "Organization" },
              target: { type: "parameter", id: "52478f10" },
              id: "52478f10"
            },
            "1d0effd6": {
              source: { type: "parameter", id: "5d935e00", name: "Job Level" },
              target: { type: "parameter", id: "1d0effd6" },
              id: "1d0effd6"
            },
            "659c3b67": {
              source: { type: "parameter", id: "a4cf11aa", name: "Date Filter" },
              target: { type: "parameter", id: "659c3b67" },
              id: "659c3b67"
            },
            ce11f27: {
              source: { type: "parameter", id: "5b0c3613", name: "Company Location" },
              target: { type: "parameter", id: "ce11f27" },
              id: "ce11f27"
            },
            c71947ad: {
              source: { type: "parameter", id: "b952228e", name: "Job Title" },
              target: { type: "parameter", id: "c71947ad" },
              id: "c71947ad"
            },
            "76dc5b72": {
              source: { type: "parameter", id: "7da13cd7", name: "Date Filter" },
              target: { type: "parameter", id: "76dc5b72" },
              id: "76dc5b72"
            }
          },
          targetId: 20
        },
        "card.description": "Total sick leave taken in given date filter. Click the number to see more details.",
        column_settings: { '["name","total_sick_leave"]': { suffix: " people" } }
      },
      dashboard_id: 12,
      sizeY: 3,
      row: 0
    },
    {
      sizeX: 9,
      series: [],
      card: {
        id: 115,
        name: "Table Employee Taking Sick Leave Near Holiday [Native]",
        description: "List of employee who took sick leave near holiday date in given date filter",
        display: "table",
        visualization_settings: {
          "table.pivot_column": "avg_working_hour",
          "table.cell_column": "grouped_date",
          "scalar.switch_positive_negative": true,
          "card.title": "Employee Taking Sick Leave Near Holiday",
          "table.column_formatting": [],
          column_settings: {
            '["name","employee_id"]': { column_title: "Employee ID" },
            '["name","employee_name"]': { column_title: "Employee Name" },
            '["name","sick_leave_date"]': { column_title: "Sick Leave Date" },
            '["name","holiday_date"]': { column_title: "Holiday Date" }
          }
        },
        dataset_query: {
          type: "native",
          native: {
            "template-tags": {
              company_location: {
                id: "e7a12e91-45e2-68bb-9290-7c3fe14201b8",
                name: "company_location",
                "display-name": "Company location",
                type: "dimension",
                dimension: ["field", 1590, null],
                "widget-type": "category"
              },
              job_level: {
                id: "1d377b8f-80ec-7a12-9a36-18262aca7316",
                name: "job_level",
                "display-name": "Job level",
                type: "dimension",
                dimension: ["field", 1584, null],
                "widget-type": "category"
              },
              job_role: {
                id: "24e22beb-9ded-60d3-7e64-3d225c6e501e",
                name: "job_role",
                "display-name": "Job role",
                type: "dimension",
                dimension: ["field", 1581, null],
                "widget-type": "category"
              },
              organization: {
                id: "74145f45-03ad-4d1f-7f49-0ed022fde25f",
                name: "organization",
                "display-name": "Organization",
                type: "dimension",
                dimension: ["field", 1589, null],
                "widget-type": "category"
              },
              employee_name: {
                id: "4569aef7-e1c1-8d92-4b64-6c05f4a8a4c4",
                name: "employee_name",
                "display-name": "Employee name",
                type: "dimension",
                dimension: ["field", 1588, null],
                "widget-type": "category"
              },
              employee_id: {
                id: "05844df3-2e8d-76bf-6d85-b3199f23a499",
                name: "employee_id",
                "display-name": "Employee ID",
                type: "dimension",
                dimension: ["field", 1587, null],
                "widget-type": "category"
              },
              date: {
                id: "47215355-e193-2b63-baf9-2f76d8d565fd",
                name: "date",
                "display-name": "Date",
                type: "dimension",
                dimension: ["field", 1591, null],
                "widget-type": "date/range"
              }
            }
          }
        }
      },
      col: 9,
      id: 126,
      parameter_mappings: [
        { parameter_id: "5b0c3613", card_id: 115, target: ["dimension", ["template-tag", "company_location"]] },
        { parameter_id: "5d935e00", card_id: 115, target: ["dimension", ["template-tag", "job_level"]] },
        { parameter_id: "b952228e", card_id: 115, target: ["dimension", ["template-tag", "job_role"]] },
        { parameter_id: "d33b986f", card_id: 115, target: ["dimension", ["template-tag", "organization"]] },
        { parameter_id: "7da13cd7", card_id: 115, target: ["dimension", ["template-tag", "date"]] }
      ],
      card_id: 115,
      visualization_settings: {
        "table.pivot_column": "avg_working_hour",
        "table.cell_column": "grouped_date",
        "scalar.switch_positive_negative": true,
        "card.title": "Employee Taking Sick Leave Near Holiday",
        "table.column_formatting": [],
        "card.description":
          "List of employee who took sick leave near holiday date in given date filter. Click Employee-ID to see more details. Click the Employee-ID to see more details.",
        column_settings: {
          '["name","employee_id"]': {
            column_title: "Employee ID",
            click_behavior: {
              targetId: 14,
              parameterMapping: {
                "19111ec7": {
                  source: { type: "column", id: "employee_id", name: "employee_id" },
                  target: { type: "parameter", id: "19111ec7" },
                  id: "19111ec7"
                },
                b39a0087: {
                  source: { type: "parameter", id: "7da13cd7", name: "Date Filter" },
                  target: { type: "parameter", id: "b39a0087" },
                  id: "b39a0087"
                },
                ef965886: {
                  source: { type: "column", id: "employee_name", name: "employee_name" },
                  target: { type: "parameter", id: "ef965886" },
                  id: "ef965886"
                }
              },
              linkType: "dashboard",
              type: "link"
            }
          },
          '["name","employee_name"]': { column_title: "Employee Name" },
          '["name","sick_leave_date"]': { column_title: "Sick Leave Date" },
          '["name","holiday_date"]': { column_title: "Holiday Date" }
        }
      },
      dashboard_id: 12,
      sizeY: 6,
      row: 15
    },
    {
      sizeX: 18,
      series: [],
      card: {
        id: 118,
        name: "Table Employee Watchlist Bootstrap [Native]",
        description:
          "List of employees who have the potential to violate company policy in given date filter. Click the employee id to see more details.",
        display: "table",
        visualization_settings: {
          "table.pivot_column": "avg_working_hour",
          "table.cell_column": "grouped_date",
          "scalar.switch_positive_negative": true,
          "card.title": "Employee Watchlist",
          column_settings: {
            '["name","employee_id"]': { column_title: "Employee ID" },
            '["name","employee_name"]': { column_title: "Employee Name" },
            '["name","sick_leave_date"]': { column_title: "Sick Leave Date" },
            '["name","annual_leave_date"]': { column_title: "Annual Leave Date" },
            '["name","type"]': { column_title: "Type" },
            '["name","reason"]': { column_title: "Reason" },
            '["name","Year"]': { number_separators: "." },
            '["name","Total Action"]': { suffix: " times", show_mini_bar: false }
          }
        },
        dataset_query: {
          type: "native",
          native: {
            "template-tags": {
              company_location: {
                id: "e35c28e7-37e2-052c-2fcf-0e8d915b4bb6",
                name: "company_location",
                "display-name": "Company location",
                type: "dimension",
                dimension: ["field", 1590, null],
                "widget-type": "category"
              },
              job_level: {
                id: "1160eb46-f0a6-7f2c-9987-416f2eb0a7ce",
                name: "job_level",
                "display-name": "Job level",
                type: "dimension",
                dimension: ["field", 1584, null],
                "widget-type": "category"
              },
              job_title: {
                id: "9f792e20-b807-2998-5d25-ed2f926fcad2",
                name: "job_title",
                "display-name": "Job title",
                type: "dimension",
                dimension: ["field", 1581, null],
                "widget-type": "category"
              },
              organization: {
                id: "ffc26b30-082c-f6d0-6615-b1e91a532551",
                name: "organization",
                "display-name": "Organization",
                type: "dimension",
                dimension: ["field", 1589, null],
                "widget-type": "category"
              },
              attendance_date: {
                id: "83a31d19-773d-328d-108f-05847cb7b34b",
                name: "attendance_date",
                "display-name": "Attendance date",
                type: "dimension",
                dimension: ["field", 1591, null],
                "widget-type": "date/all-options"
              },
              employee_id: {
                id: "5f1c9ea3-718b-642c-c57e-0d95d3bd8c39",
                name: "employee_id",
                "display-name": "Employee id",
                type: "dimension",
                dimension: ["field", 1587, null],
                "widget-type": "category"
              }
            }
          }
        }
      },
      col: 0,
      id: 129,
      parameter_mappings: [
        { parameter_id: "7da13cd7", card_id: 118, target: ["dimension", ["template-tag", "attendance_date"]] },
        { parameter_id: "5d935e00", card_id: 118, target: ["dimension", ["template-tag", "job_level"]] },
        { parameter_id: "5b0c3613", card_id: 118, target: ["dimension", ["template-tag", "company_location"]] },
        { parameter_id: "b952228e", card_id: 118, target: ["dimension", ["template-tag", "job_title"]] },
        { parameter_id: "d33b986f", card_id: 118, target: ["dimension", ["template-tag", "organization"]] }
      ],
      card_id: 118,
      visualization_settings: {
        "table.pivot_column": "avg_working_hour",
        "table.cell_column": "grouped_date",
        "scalar.switch_positive_negative": true,
        "card.title": "Employee Watchlist",
        "card.description":
          "List of employees who have the potential to violate company policy in given date filter. Click Employee-ID to see more details.",
        column_settings: {
          '["name","employee_id"]': { column_title: "Employee ID" },
          '["name","employee_name"]': { column_title: "Employee Name" },
          '["name","sick_leave_date"]': { column_title: "Sick Leave Date" },
          '["name","annual_leave_date"]': { column_title: "Annual Leave Date" },
          '["name","type"]': { column_title: "Type" },
          '["name","reason"]': { column_title: "Reason" },
          '["name","Year"]': { number_separators: "." },
          '["name","Total Action"]': { suffix: " times", show_mini_bar: false }
        }
      },
      dashboard_id: 12,
      sizeY: 6,
      row: 43
    },
    {
      sizeX: 6,
      series: [],
      card: {
        id: 144,
        name: "Number Monthly Average Employee Come Late [Native]",
        description:
          "Total number of employees who come late after the time specified by the company in given date filter. Click the number to see more details.",
        display: "scalar",
        visualization_settings: {
          click_behavior: {
            type: "link",
            linkType: "dashboard",
            parameterMapping: {
              b3798869: {
                source: { type: "parameter", id: "d33b986f", name: "Organization" },
                target: { type: "parameter", id: "b3798869" },
                id: "b3798869"
              },
              "5c098444": {
                source: { type: "parameter", id: "5d935e00", name: "Job Level" },
                target: { type: "parameter", id: "5c098444" },
                id: "5c098444"
              },
              deadcfe: {
                source: { type: "parameter", id: "a4cf11aa", name: "Date Filter" },
                target: { type: "parameter", id: "deadcfe" },
                id: "deadcfe"
              },
              "9912c4e7": {
                source: { type: "parameter", id: "5b0c3613", name: "Company Location" },
                target: { type: "parameter", id: "9912c4e7" },
                id: "9912c4e7"
              },
              db964e3d: {
                source: { type: "parameter", id: "b952228e", name: "Job Title" },
                target: { type: "parameter", id: "db964e3d" },
                id: "db964e3d"
              },
              "639f645a": {
                source: { type: "parameter", id: "7da13cd7", name: "Date Filter" },
                target: { type: "parameter", id: "639f645a" },
                id: "639f645a"
              }
            },
            targetId: 18
          },
          "table.cell_column": "grouped_date",
          "gauge.segments": [
            { min: 0, max: 0.05, color: "#84BB4C", label: "" },
            { min: 0.05, max: 0.25, color: "#F9CF48", label: "" },
            { min: 0.25, max: 1, color: "#ED6E6E", label: "" }
          ],
          "card.title": "Total Come Late",
          "scalar.field": "count_employee_come_late",
          "scalar.switch_positive_negative": false,
          "card.description":
            "Total number of employees who come late after the time specified by the company in given date filter. Click the number to see more details.",
          "table.pivot_column": "employee_come_late",
          column_settings: {
            '["name","average_percentage_employee_come_late"]': { number_style: "decimal", suffix: " people" },
            '["name","count_employee_come_late"]': { suffix: " people" }
          }
        },
        dataset_query: {
          type: "native",
          native: {
            "template-tags": {
              company_location: {
                id: "0e748d30-071b-e0e2-16c7-52a4de03cbc0",
                name: "company_location",
                "display-name": "Company location",
                type: "dimension",
                dimension: ["field", 1590, null],
                "widget-type": "category"
              },
              job_level: {
                id: "300eba70-ae7c-c35b-85ab-7c786a51bddd",
                name: "job_level",
                "display-name": "Job level",
                type: "dimension",
                dimension: ["field", 1584, null],
                "widget-type": "category"
              },
              job_title: {
                id: "8e4840ee-025a-2564-38ab-1dbbfa4bda55",
                name: "job_title",
                "display-name": "Job title",
                type: "dimension",
                dimension: ["field", 1581, null],
                "widget-type": "category"
              },
              organization: {
                id: "f3c10efa-1664-bc6e-9113-b20128769ffd",
                name: "organization",
                "display-name": "Organization",
                type: "dimension",
                dimension: ["field", 1589, null],
                "widget-type": "category"
              },
              employee_ID: {
                id: "228c098c-a0e0-df10-6222-cebb36674220",
                name: "employee_ID",
                "display-name": "Employee",
                type: "dimension",
                dimension: ["field", 1587, null],
                "widget-type": "category"
              },
              date_filter: {
                id: "4618acc1-c90d-7f18-61c8-0c811af68e53",
                name: "date_filter",
                "display-name": "Date filter",
                type: "dimension",
                dimension: ["field", 1591, null],
                "widget-type": "date/range"
              }
            }
          }
        }
      },
      col: 0,
      id: 166,
      parameter_mappings: [
        { parameter_id: "5b0c3613", card_id: 144, target: ["dimension", ["template-tag", "company_location"]] },
        { parameter_id: "b952228e", card_id: 144, target: ["dimension", ["template-tag", "job_title"]] },
        { parameter_id: "d33b986f", card_id: 144, target: ["dimension", ["template-tag", "organization"]] },
        { parameter_id: "5d935e00", card_id: 144, target: ["dimension", ["template-tag", "job_level"]] },
        { parameter_id: "7da13cd7", card_id: 144, target: ["dimension", ["template-tag", "date_filter"]] }
      ],
      card_id: 144,
      visualization_settings: {
        click_behavior: {
          type: "link",
          linkType: "dashboard",
          parameterMapping: {
            b3798869: {
              source: { type: "parameter", id: "d33b986f", name: "Organization" },
              target: { type: "parameter", id: "b3798869" },
              id: "b3798869"
            },
            "5c098444": {
              source: { type: "parameter", id: "5d935e00", name: "Job Level" },
              target: { type: "parameter", id: "5c098444" },
              id: "5c098444"
            },
            deadcfe: {
              source: { type: "parameter", id: "a4cf11aa", name: "Date Filter" },
              target: { type: "parameter", id: "deadcfe" },
              id: "deadcfe"
            },
            "9912c4e7": {
              source: { type: "parameter", id: "5b0c3613", name: "Company Location" },
              target: { type: "parameter", id: "9912c4e7" },
              id: "9912c4e7"
            },
            db964e3d: {
              source: { type: "parameter", id: "b952228e", name: "Job Title" },
              target: { type: "parameter", id: "db964e3d" },
              id: "db964e3d"
            },
            "639f645a": {
              source: { type: "parameter", id: "7da13cd7", name: "Date Filter" },
              target: { type: "parameter", id: "639f645a" },
              id: "639f645a"
            }
          },
          targetId: 18
        },
        "table.cell_column": "grouped_date",
        "gauge.segments": [
          { min: 0, max: 0.05, color: "#84BB4C", label: "" },
          { min: 0.05, max: 0.25, color: "#F9CF48", label: "" },
          { min: 0.25, max: 1, color: "#ED6E6E", label: "" }
        ],
        "card.title": "Total Come Late",
        "scalar.field": "count_employee_come_late",
        "scalar.switch_positive_negative": false,
        "card.description":
          "Total number of employees who come late after the time specified by the company in given date filter.  Click the number to see more details.",
        "table.pivot_column": "employee_come_late",
        column_settings: {
          '["name","average_percentage_employee_come_late"]': { number_style: "decimal", suffix: " people" },
          '["name","count_employee_come_late"]': { suffix: " people" }
        }
      },
      dashboard_id: 12,
      sizeY: 3,
      row: 33
    },
    {
      sizeX: 6,
      series: [],
      card: {
        id: 145,
        name: "Number Monthly Average Employee Leave Early [Native]",
        description:
          "Total number of employees who work below their working hours in given date filter. Click the number to see more details.",
        display: "scalar",
        visualization_settings: {
          click_behavior: {
            type: "link",
            linkType: "dashboard",
            parameterMapping: {
              "1f473b50": {
                source: { type: "parameter", id: "d33b986f", name: "Organization" },
                target: { type: "parameter", id: "1f473b50" },
                id: "1f473b50"
              },
              bde8d0a6: {
                source: { type: "parameter", id: "5d935e00", name: "Job Level" },
                target: { type: "parameter", id: "bde8d0a6" },
                id: "bde8d0a6"
              },
              a7b4ced9: {
                source: { type: "parameter", id: "a4cf11aa", name: "Date Filter" },
                target: { type: "parameter", id: "a7b4ced9" },
                id: "a7b4ced9"
              },
              bfa4f492: {
                source: { type: "parameter", id: "5b0c3613", name: "Company Location" },
                target: { type: "parameter", id: "bfa4f492" },
                id: "bfa4f492"
              },
              a846211: {
                source: { type: "parameter", id: "b952228e", name: "Job Title" },
                target: { type: "parameter", id: "a846211" },
                id: "a846211"
              },
              "2760a486": {
                source: { type: "parameter", id: "7da13cd7", name: "Date Filter" },
                target: { type: "parameter", id: "2760a486" },
                id: "2760a486"
              }
            },
            targetId: 19
          },
          "table.cell_column": "grouped_date",
          "gauge.segments": [
            { min: 0, max: 0.05, color: "#84BB4C", label: "" },
            { min: 0.05, max: 0.25, color: "#F9CF48", label: "" },
            { min: 0.25, max: 1, color: "#ED6E6E", label: "" }
          ],
          "card.title": "Total Leave Early",
          "scalar.field": "count_employee_leave_early",
          "scalar.switch_positive_negative": false,
          "card.description":
            "Total employees leave early in given date filter period. Click the value to see more details.",
          "table.pivot_column": "avg_working_hour",
          column_settings: {
            '["name","average_percentage_employee_come_late"]': { number_style: "percent" },
            '["name","average_percentage_employee_leave_early"]': { number_style: "decimal", suffix: " people" }
          }
        },
        dataset_query: {
          type: "native",
          native: {
            "template-tags": {
              company_location: {
                id: "0e748d30-071b-e0e2-16c7-52a4de03cbc0",
                name: "company_location",
                "display-name": "Company location",
                type: "dimension",
                dimension: ["field", 1590, null],
                "widget-type": "category"
              },
              job_level: {
                id: "300eba70-ae7c-c35b-85ab-7c786a51bddd",
                name: "job_level",
                "display-name": "Job level",
                type: "dimension",
                dimension: ["field", 1584, null],
                "widget-type": "category"
              },
              job_title: {
                id: "8e4840ee-025a-2564-38ab-1dbbfa4bda55",
                name: "job_title",
                "display-name": "Job title",
                type: "dimension",
                dimension: ["field", 1581, null],
                "widget-type": "category"
              },
              organization: {
                id: "f3c10efa-1664-bc6e-9113-b20128769ffd",
                name: "organization",
                "display-name": "Organization",
                type: "dimension",
                dimension: ["field", 1589, null],
                "widget-type": "category"
              },
              employee_ID: {
                id: "e6e330a9-2b99-4531-c5a3-bed901562671",
                name: "employee_ID",
                "display-name": "Employee",
                type: "dimension",
                dimension: ["field", 1587, null],
                "widget-type": "category"
              },
              date_filter: {
                id: "806cfef5-c2d3-2aed-d7c4-598bda1ac623",
                name: "date_filter",
                "display-name": "Date filter",
                type: "dimension",
                dimension: ["field", 1591, null],
                "widget-type": "date/range"
              }
            }
          }
        }
      },
      col: 6,
      id: 165,
      parameter_mappings: [
        { parameter_id: "5b0c3613", card_id: 145, target: ["dimension", ["template-tag", "company_location"]] },
        { parameter_id: "b952228e", card_id: 145, target: ["dimension", ["template-tag", "job_title"]] },
        { parameter_id: "d33b986f", card_id: 145, target: ["dimension", ["template-tag", "organization"]] },
        { parameter_id: "5d935e00", card_id: 145, target: ["dimension", ["template-tag", "job_level"]] },
        { parameter_id: "7da13cd7", card_id: 145, target: ["dimension", ["template-tag", "date_filter"]] }
      ],
      card_id: 145,
      visualization_settings: {
        click_behavior: {
          type: "link",
          linkType: "dashboard",
          parameterMapping: {
            "1f473b50": {
              source: { type: "parameter", id: "d33b986f", name: "Organization" },
              target: { type: "parameter", id: "1f473b50" },
              id: "1f473b50"
            },
            bde8d0a6: {
              source: { type: "parameter", id: "5d935e00", name: "Job Level" },
              target: { type: "parameter", id: "bde8d0a6" },
              id: "bde8d0a6"
            },
            a7b4ced9: {
              source: { type: "parameter", id: "a4cf11aa", name: "Date Filter" },
              target: { type: "parameter", id: "a7b4ced9" },
              id: "a7b4ced9"
            },
            bfa4f492: {
              source: { type: "parameter", id: "5b0c3613", name: "Company Location" },
              target: { type: "parameter", id: "bfa4f492" },
              id: "bfa4f492"
            },
            a846211: {
              source: { type: "parameter", id: "b952228e", name: "Job Title" },
              target: { type: "parameter", id: "a846211" },
              id: "a846211"
            },
            "2760a486": {
              source: { type: "parameter", id: "7da13cd7", name: "Date Filter" },
              target: { type: "parameter", id: "2760a486" },
              id: "2760a486"
            }
          },
          targetId: 19
        },
        "table.cell_column": "grouped_date",
        "gauge.segments": [
          { min: 0, max: 0.05, color: "#84BB4C", label: "" },
          { min: 0.05, max: 0.25, color: "#F9CF48", label: "" },
          { min: 0.25, max: 1, color: "#ED6E6E", label: "" }
        ],
        "card.title": "Total Leave Early",
        "scalar.field": "count_employee_leave_early",
        "scalar.switch_positive_negative": false,
        "card.description":
          "Total number of employee who work below their working hours in given date filter period. Click the number to see more details.",
        "table.pivot_column": "avg_working_hour",
        column_settings: {
          '["name","average_percentage_employee_come_late"]': { number_style: "percent" },
          '["name","average_percentage_employee_leave_early"]': { number_style: "decimal", suffix: " people" }
        }
      },
      dashboard_id: 12,
      sizeY: 3,
      row: 33
    },
    {
      sizeX: 9,
      series: [],
      card: {
        id: 262,
        name: "Line Weekly Employee Sick Leave Forecast [Native]",
        description: null,
        display: "line",
        visualization_settings: {
          "graph.y_axis.title_text": "Number of Employees",
          "graph.show_values": false,
          "graph.x_axis.labels_enabled": false,
          "table.cell_column": "grouped_date",
          "graph.x_axis.title_text": "Period",
          "card.title": "Employee Sick Leave (Forecast)",
          "graph.metrics": ["Number of Employee"],
          "scalar.switch_positive_negative": true,
          "card.description": "Forecast will appear when filter >= current date.",
          "table.pivot_column": "avg_working_hour",
          series_settings: {
            Actual: {
              "line.marker_enabled": true,
              axis: null,
              show_series_values: false,
              "line.interpolate": "linear"
            },
            Forecasted: { "line.marker_enabled": true },
            "Forecast Upper": { "line.marker_enabled": true },
            "Forecast Lower": { "line.marker_enabled": true }
          },
          "graph.dimensions": ["Period", "Type"]
        },
        dataset_query: {
          type: "native",
          native: {
            "template-tags": {
              calendar_date: {
                id: "a6c3f492-a8b4-2282-4d9a-556c6d01edd9",
                name: "calendar_date",
                "display-name": "Calendar date",
                type: "dimension",
                dimension: ["field", 1593, null],
                "widget-type": "date/all-options",
                required: false
              },
              company_location: {
                id: "bfb5e7bd-a9a2-8978-1529-7add58cde8db",
                name: "company_location",
                "display-name": "Company location",
                type: "dimension",
                dimension: ["field", 1590, null],
                "widget-type": "category"
              },
              job_level: {
                id: "f0c9390e-6ecf-97e9-a643-e6dcbf6dcde2",
                name: "job_level",
                "display-name": "Job level",
                type: "dimension",
                dimension: ["field", 1584, null],
                "widget-type": "category"
              },
              job_title: {
                id: "249d3bdc-108c-6365-61c6-c4bb87c75cc4",
                name: "job_title",
                "display-name": "Job title",
                type: "dimension",
                dimension: ["field", 1581, null],
                "widget-type": "category"
              },
              organization: {
                id: "527718ce-9309-6138-7e7a-9e84a99ad274",
                name: "organization",
                "display-name": "Organization",
                type: "dimension",
                dimension: ["field", 1589, null],
                "widget-type": "category"
              },
              employee_name: {
                id: "e855c09c-09b4-d50d-a8b4-d48eef0a345e",
                name: "employee_name",
                "display-name": "Employee name",
                type: "dimension",
                dimension: ["field", 1588, null],
                "widget-type": "category"
              },
              employee_id: {
                id: "74d1f837-4001-163f-8dc3-82969e3d24d1",
                name: "employee_id",
                "display-name": "Employee ID",
                type: "dimension",
                dimension: ["field", 1587, null],
                "widget-type": "category"
              }
            }
          }
        }
      },
      col: 9,
      id: 360,
      parameter_mappings: [
        { parameter_id: "d33b986f", card_id: 262, target: ["dimension", ["template-tag", "organization"]] },
        { parameter_id: "b952228e", card_id: 262, target: ["dimension", ["template-tag", "job_title"]] },
        { parameter_id: "5d935e00", card_id: 262, target: ["dimension", ["template-tag", "job_level"]] },
        { parameter_id: "5b0c3613", card_id: 262, target: ["dimension", ["template-tag", "company_location"]] },
        { parameter_id: "7da13cd7", card_id: 262, target: ["dimension", ["template-tag", "calendar_date"]] }
      ],
      card_id: 262,
      visualization_settings: {
        "graph.y_axis.title_text": "Number of Employees",
        "graph.show_values": false,
        "graph.x_axis.labels_enabled": false,
        "table.cell_column": "grouped_date",
        "graph.x_axis.title_text": "Period",
        "card.title": "Employee Sick Leave (Forecast)",
        "graph.metrics": ["Number of Employee"],
        "scalar.switch_positive_negative": true,
        "card.description": "Forecast will appear when filter >= current date.",
        "table.pivot_column": "avg_working_hour",
        series_settings: {
          Actual: { "line.marker_enabled": true, axis: null, show_series_values: false, "line.interpolate": "linear" },
          Forecasted: { "line.marker_enabled": true },
          "Forecast Upper": { "line.marker_enabled": true },
          "Forecast Lower": { "line.marker_enabled": true }
        },
        "graph.dimensions": ["Period", "Type"]
      },
      dashboard_id: 12,
      sizeY: 6,
      row: 9
    },
    {
      sizeX: 9,
      series: [],
      card: {
        id: 117,
        name: "Line Weekly Employee Annual Leave  Forecast [Native]",
        description: null,
        display: "line",
        visualization_settings: {
          "graph.y_axis.title_text": "Number of Employees",
          "graph.x_axis.labels_enabled": false,
          "table.cell_column": "grouped_date",
          "graph.x_axis.title_text": "Period",
          "card.title": "Employee Annual Leave (Forecast)",
          "graph.metrics": ["Number of Employee"],
          "scalar.switch_positive_negative": true,
          "card.description": "Forecast will appear when filter >= current date.",
          "table.pivot_column": "avg_working_hour",
          series_settings: {
            Actual: { "line.marker_enabled": true, color: "#98D9D9" },
            Forecasted: { "line.marker_enabled": true, color: "#A989C5" },
            "Forecast Upper": { "line.marker_enabled": true },
            "Forecast Lower": { "line.marker_enabled": true }
          },
          "graph.dimensions": ["Period", "Type"]
        },
        dataset_query: {
          type: "native",
          native: {
            "template-tags": {
              calendar_date: {
                id: "a6c3f492-a8b4-2282-4d9a-556c6d01edd9",
                name: "calendar_date",
                "display-name": "Calendar date",
                type: "dimension",
                dimension: ["field", 1593, null],
                "widget-type": "date/all-options",
                required: false
              },
              company_location: {
                id: "bfb5e7bd-a9a2-8978-1529-7add58cde8db",
                name: "company_location",
                "display-name": "Company location",
                type: "dimension",
                dimension: ["field", 1590, null],
                "widget-type": "category"
              },
              job_level: {
                id: "f0c9390e-6ecf-97e9-a643-e6dcbf6dcde2",
                name: "job_level",
                "display-name": "Job level",
                type: "dimension",
                dimension: ["field", 1584, null],
                "widget-type": "category"
              },
              job_title: {
                id: "249d3bdc-108c-6365-61c6-c4bb87c75cc4",
                name: "job_title",
                "display-name": "Job title",
                type: "dimension",
                dimension: ["field", 1581, null],
                "widget-type": "category"
              },
              organization: {
                id: "527718ce-9309-6138-7e7a-9e84a99ad274",
                name: "organization",
                "display-name": "Organization",
                type: "dimension",
                dimension: ["field", 1589, null],
                "widget-type": "category"
              },
              employee_name: {
                id: "e855c09c-09b4-d50d-a8b4-d48eef0a345e",
                name: "employee_name",
                "display-name": "Employee name",
                type: "dimension",
                dimension: ["field", 1588, null],
                "widget-type": "category"
              },
              employee_id: {
                id: "97c6d984-dcc5-11a1-3ab8-7ccb729d78b1",
                name: "employee_id",
                "display-name": "Employee ID",
                type: "dimension",
                dimension: ["field", 1587, null],
                "widget-type": "category"
              }
            }
          }
        }
      },
      col: 0,
      id: 361,
      parameter_mappings: [
        { parameter_id: "d33b986f", card_id: 117, target: ["dimension", ["template-tag", "organization"]] },
        { parameter_id: "b952228e", card_id: 117, target: ["dimension", ["template-tag", "job_title"]] },
        { parameter_id: "5d935e00", card_id: 117, target: ["dimension", ["template-tag", "job_level"]] },
        { parameter_id: "5b0c3613", card_id: 117, target: ["dimension", ["template-tag", "company_location"]] },
        { parameter_id: "7da13cd7", card_id: 117, target: ["dimension", ["template-tag", "calendar_date"]] }
      ],
      card_id: 117,
      visualization_settings: {
        "graph.y_axis.title_text": "Number of Employees",
        "graph.x_axis.labels_enabled": false,
        "table.cell_column": "grouped_date",
        "graph.x_axis.title_text": "Period",
        "card.title": "Employee Annual Leave (Forecast)",
        "graph.metrics": ["Number of Employee"],
        "scalar.switch_positive_negative": true,
        "card.description": "Forecast will appear when filter >= current date.",
        "table.pivot_column": "avg_working_hour",
        series_settings: {
          Actual: { "line.marker_enabled": true, color: "#98D9D9" },
          Forecasted: { "line.marker_enabled": true, color: "#A989C5" },
          "Forecast Upper": { "line.marker_enabled": true },
          "Forecast Lower": { "line.marker_enabled": true }
        },
        "graph.dimensions": ["Period", "Type"]
      },
      dashboard_id: 12,
      sizeY: 6,
      row: 9
    },
    {
      sizeX: 6,
      series: [],
      card: {
        id: 304,
        name: "Table Employee Most Incomplete Time Tracking [Native]",
        description:
          "This list only shows employees who have the highest count of Incomplete Time Tracking in given date filter. Click the employee id to see more details.",
        display: "table",
        visualization_settings: {
          "table.pivot_column": "employee_id",
          "table.cell_column": "Count",
          "card.description": "Click the employee ID to see more details.",
          "card.title": "Employee with Most Incomplete Time Tracking",
          column_settings: {
            '["name","employee_id"]': {
              column_title: "Employee ID",
              click_behavior: {
                type: "link",
                linkType: "dashboard",
                parameterMapping: {
                  "19111ec7": {
                    source: { type: "column", id: "employee_id", name: "employee_id" },
                    target: { type: "parameter", id: "19111ec7" },
                    id: "19111ec7"
                  },
                  b39a0087: {
                    source: { type: "parameter", id: "7da13cd7", name: "Date Filter" },
                    target: { type: "parameter", id: "b39a0087" },
                    id: "b39a0087"
                  },
                  ef965886: {
                    source: { type: "column", id: "employee_name", name: "employee_name" },
                    target: { type: "parameter", id: "ef965886" },
                    id: "ef965886"
                  }
                },
                targetId: 14
              }
            },
            '["name","employee_name"]': { column_title: "Employee Name" },
            '["name","Count"]': { show_mini_bar: false }
          }
        },
        dataset_query: {
          type: "native",
          native: {
            "template-tags": {
              company_location: {
                id: "8c573e8b-4e07-4d28-108e-90227985a55c",
                name: "company_location",
                "display-name": "Company location",
                type: "dimension",
                dimension: ["field", 1590, null],
                "widget-type": "category"
              },
              job_level: {
                id: "d2c8eb61-adb4-38be-f3fc-ea43a611972a",
                name: "job_level",
                "display-name": "Job level",
                type: "dimension",
                dimension: ["field", 1584, null],
                "widget-type": "category"
              },
              job_title: {
                id: "c3ad5265-987e-f6e6-ae6f-908319284594",
                name: "job_title",
                "display-name": "Job title",
                type: "dimension",
                dimension: ["field", 1581, null],
                "widget-type": "category"
              },
              organization: {
                id: "bb9f89c5-17ee-2a61-4cf3-bf08fda8dc94",
                name: "organization",
                "display-name": "Organization",
                type: "dimension",
                dimension: ["field", 1589, null],
                "widget-type": "category"
              },
              employee_id: {
                id: "742e9c21-d19e-4077-619f-7374500eba03",
                name: "employee_id",
                "display-name": "Employee",
                type: "dimension",
                dimension: ["field", 1587, null],
                "widget-type": "category"
              },
              attendance_date: {
                id: "f8903e1a-a825-e101-373f-031a6777e731",
                name: "attendance_date",
                "display-name": "Attendance date",
                type: "dimension",
                dimension: ["field", 1591, null],
                "widget-type": "date/all-options"
              }
            }
          }
        }
      },
      col: 12,
      id: 388,
      parameter_mappings: [
        { parameter_id: "5b0c3613", card_id: 304, target: ["dimension", ["template-tag", "company_location"]] },
        { parameter_id: "5d935e00", card_id: 304, target: ["dimension", ["template-tag", "job_level"]] },
        { parameter_id: "b952228e", card_id: 304, target: ["dimension", ["template-tag", "job_title"]] },
        { parameter_id: "d33b986f", card_id: 304, target: ["dimension", ["template-tag", "organization"]] },
        { parameter_id: "7da13cd7", card_id: 304, target: ["dimension", ["template-tag", "attendance_date"]] }
      ],
      card_id: 304,
      visualization_settings: {
        "table.pivot_column": "employee_id",
        "table.cell_column": "Count",
        "card.description":
          "This list only shows employees who have the highest count of Incomplete Time Tracking in given date filter. Click the Employee-ID to see more details.",
        "card.title": "Employee with Most Incomplete Time Tracking",
        column_settings: {
          '["name","employee_id"]': {
            column_title: "Employee ID",
            click_behavior: {
              type: "link",
              linkType: "dashboard",
              parameterMapping: {
                "19111ec7": {
                  source: { type: "column", id: "employee_id", name: "employee_id" },
                  target: { type: "parameter", id: "19111ec7" },
                  id: "19111ec7"
                },
                b39a0087: {
                  source: { type: "parameter", id: "7da13cd7", name: "Date Filter" },
                  target: { type: "parameter", id: "b39a0087" },
                  id: "b39a0087"
                },
                ef965886: {
                  source: { type: "column", id: "employee_name", name: "employee_name" },
                  target: { type: "parameter", id: "ef965886" },
                  id: "ef965886"
                }
              },
              targetId: 14
            }
          },
          '["name","employee_name"]': { column_title: "Employee Name" },
          '["name","Count"]': { show_mini_bar: false }
        }
      },
      dashboard_id: 12,
      sizeY: 7,
      row: 36
    },
    {
      sizeX: 9,
      series: [],
      card: {
        id: 305,
        name: "Table Week with The Most Annual Leave [Native]",
        description: "Week with the most annual leave in given date filter sorted by the highest annual leave count",
        display: "table",
        visualization_settings: {
          "table.columns": [
            { name: "week", fieldRef: ["field", "week", { "base-type": "type/Text" }], enabled: true },
            { name: "Near Holiday", fieldRef: ["field", "Near Holiday", { "base-type": "type/Text" }], enabled: true },
            {
              name: "Number of Employee",
              fieldRef: ["field", "Number of Employee", { "base-type": "type/BigInteger" }],
              enabled: true
            }
          ],
          "table.cell_column": "Number of Employee",
          "graph.x_axis.axis_enabled": false,
          "card.title": "Week with The Most Annual Leave",
          "graph.metrics": ["Number of Employee"],
          "card.description":
            "Week with the most annual leave in given date filter sorted by the highest annual leave count.",
          "table.pivot_column": "near_holiday",
          column_settings: {
            '["name","week"]': { column_title: "Week" },
            '["name","near_holiday"]': { column_title: "Near Holiday" },
            '["name","Number of Employee"]': { number_style: "decimal", show_mini_bar: true },
            '["name","Count"]': { show_mini_bar: true }
          },
          series_settings: { "Number of Employee": { color: "#88BF4D" } },
          "graph.dimensions": ["week"]
        },
        dataset_query: {
          type: "native",
          native: {
            "template-tags": {
              company_location: {
                id: "f9144d15-9c5f-050a-f5ef-ab725e567302",
                name: "company_location",
                "display-name": "Company location",
                type: "dimension",
                dimension: ["field", 1590, null],
                "widget-type": "category"
              },
              job_level: {
                id: "021c1f5f-de52-53e7-e124-973807e5fd97",
                name: "job_level",
                "display-name": "Job level",
                type: "dimension",
                dimension: ["field", 1584, null],
                "widget-type": "category"
              },
              job_title: {
                id: "b3d1c266-8268-f838-036c-a9f11b3a8903",
                name: "job_title",
                "display-name": "Job title",
                type: "dimension",
                dimension: ["field", 1581, null],
                "widget-type": "category"
              },
              organization: {
                id: "31dfa7b7-d00c-7733-3d4d-72798ba1f5dd",
                name: "organization",
                "display-name": "Organization",
                type: "dimension",
                dimension: ["field", 1589, null],
                "widget-type": "category"
              },
              calendar_date: {
                id: "675d934e-3ca4-e7b5-e39a-a7ce2f876db1",
                name: "calendar_date",
                "display-name": "Calendar date",
                type: "dimension",
                dimension: ["field", 1591, null],
                "widget-type": "date/month-year"
              },
              employee_name: {
                id: "e059bf1d-9a7f-a145-4d53-b33511f53e1c",
                name: "employee_name",
                "display-name": "Employee name",
                type: "dimension",
                dimension: ["field", 1588, null],
                "widget-type": "category"
              },
              employee_id: {
                id: "51c0220b-2119-f6aa-be6b-b5c954e83652",
                name: "employee_id",
                "display-name": "Employee",
                type: "dimension",
                dimension: ["field", 1587, null],
                "widget-type": "category"
              }
            }
          }
        }
      },
      col: 9,
      id: 389,
      parameter_mappings: [
        { parameter_id: "7da13cd7", card_id: 305, target: ["dimension", ["template-tag", "calendar_date"]] },
        { parameter_id: "5b0c3613", card_id: 305, target: ["dimension", ["template-tag", "company_location"]] },
        { parameter_id: "5d935e00", card_id: 305, target: ["dimension", ["template-tag", "job_level"]] },
        { parameter_id: "b952228e", card_id: 305, target: ["dimension", ["template-tag", "job_title"]] },
        { parameter_id: "d33b986f", card_id: 305, target: ["dimension", ["template-tag", "organization"]] }
      ],
      card_id: 305,
      visualization_settings: {
        "table.columns": [
          { name: "week", fieldRef: ["field", "week", { "base-type": "type/Text" }], enabled: true },
          { name: "Near Holiday", fieldRef: ["field", "Near Holiday", { "base-type": "type/Text" }], enabled: true },
          {
            name: "Number of Employee",
            fieldRef: ["field", "Number of Employee", { "base-type": "type/BigInteger" }],
            enabled: true
          }
        ],
        "table.cell_column": "Number of Employee",
        "graph.x_axis.axis_enabled": false,
        "card.title": "Week with The Most Annual Leave",
        "graph.metrics": ["Number of Employee"],
        "card.description":
          "Week with the most annual leave in given date filter sorted by the highest annual leave count.",
        "table.pivot_column": "near_holiday",
        column_settings: {
          '["name","week"]': { column_title: "Week" },
          '["name","near_holiday"]': { column_title: "Near Holiday" },
          '["name","Number of Employee"]': { number_style: "decimal", show_mini_bar: true },
          '["name","Count"]': { show_mini_bar: true }
        },
        series_settings: { "Number of Employee": { color: "#88BF4D" } },
        "graph.dimensions": ["week"]
      },
      dashboard_id: 12,
      sizeY: 8,
      row: 49
    },
    {
      sizeX: 9,
      series: [],
      card: {
        id: 306,
        name: "Table Week with The Most Sick Leave [Native]",
        description: "Week with the most sick leave in given date filter sorted by the highest sick leave count",
        display: "table",
        visualization_settings: {
          "table.columns": [
            { name: "week", fieldRef: ["field", "week", { "base-type": "type/Text" }], enabled: true },
            { name: "Near Holiday", fieldRef: ["field", "Near Holiday", { "base-type": "type/Text" }], enabled: true },
            {
              name: "Number of Employee",
              fieldRef: ["field", "Number of Employee", { "base-type": "type/BigInteger" }],
              enabled: true
            }
          ],
          "graph.x_axis.labels_enabled": true,
          "table.cell_column": "Number of Employee",
          "graph.x_axis.axis_enabled": false,
          "card.title": "Week with The Most Sick Leave",
          "graph.metrics": ["Number of Employee"],
          "card.description":
            "Week with the most sick leave in given date filter sorted by the highest sick leave count.",
          "table.pivot_column": "near_holiday",
          column_settings: {
            '["name","week"]': { column_title: "Week" },
            '["name","near_holiday"]': { column_title: "Near Holiday" },
            '["name","Number of Employee"]': { show_mini_bar: true },
            '["name","Count"]': { show_mini_bar: true }
          },
          series_settings: { "Number of Employee": { color: "#F9D45C" } },
          "graph.dimensions": ["week"]
        },
        dataset_query: {
          type: "native",
          native: {
            "template-tags": {
              company_location: {
                id: "c808dc3c-f2c9-d73b-7cea-de8d3c6b6f18",
                name: "company_location",
                "display-name": "Company location",
                type: "dimension",
                dimension: ["field", 1590, null],
                "widget-type": "category"
              },
              job_level: {
                id: "d8b42663-e1cc-e24b-95b9-8311087e85a9",
                name: "job_level",
                "display-name": "Job level",
                type: "dimension",
                dimension: ["field", 1584, null],
                "widget-type": "category"
              },
              job_title: {
                id: "5b6d78bb-e911-1a6b-df51-934ae08201a0",
                name: "job_title",
                "display-name": "Job title",
                type: "dimension",
                dimension: ["field", 1581, null],
                "widget-type": "category"
              },
              organization: {
                id: "639f8add-fcb3-aeda-a5b2-d3342eb79552",
                name: "organization",
                "display-name": "Organization",
                type: "dimension",
                dimension: ["field", 1589, null],
                "widget-type": "category"
              },
              attendance_date: {
                id: "5b79a35d-dca4-dfae-ccc4-ef8f64c1fb29",
                name: "attendance_date",
                "display-name": "Attendance date",
                type: "dimension",
                dimension: ["field", 1591, null],
                "widget-type": "date/all-options"
              },
              employee_name: {
                id: "d3fc34db-47fc-0cdf-8716-03efa5f3b9ab",
                name: "employee_name",
                "display-name": "Employee name",
                type: "dimension",
                dimension: ["field", 1588, null],
                "widget-type": "category"
              },
              employee_id: {
                id: "137eda74-3d5d-9026-2073-afead56dc948",
                name: "employee_id",
                "display-name": "Employee ID",
                type: "dimension",
                dimension: ["field", 1587, null],
                "widget-type": "category"
              }
            }
          }
        }
      },
      col: 0,
      id: 390,
      parameter_mappings: [
        { parameter_id: "7da13cd7", card_id: 306, target: ["dimension", ["template-tag", "attendance_date"]] },
        { parameter_id: "5b0c3613", card_id: 306, target: ["dimension", ["template-tag", "company_location"]] },
        { parameter_id: "5d935e00", card_id: 306, target: ["dimension", ["template-tag", "job_level"]] },
        { parameter_id: "b952228e", card_id: 306, target: ["dimension", ["template-tag", "job_title"]] },
        { parameter_id: "d33b986f", card_id: 306, target: ["dimension", ["template-tag", "organization"]] }
      ],
      card_id: 306,
      visualization_settings: {
        "table.columns": [
          { name: "week", fieldRef: ["field", "week", { "base-type": "type/Text" }], enabled: true },
          { name: "Near Holiday", fieldRef: ["field", "Near Holiday", { "base-type": "type/Text" }], enabled: true },
          {
            name: "Number of Employee",
            fieldRef: ["field", "Number of Employee", { "base-type": "type/BigInteger" }],
            enabled: true
          }
        ],
        "graph.x_axis.labels_enabled": true,
        "table.cell_column": "Number of Employee",
        "graph.x_axis.axis_enabled": false,
        "card.title": "Week with The Most Sick Leave",
        "graph.metrics": ["Number of Employee"],
        "card.description":
          "Week with the most sick leave in given date filter sorted by the highest sick leave count.",
        "table.pivot_column": "near_holiday",
        column_settings: {
          '["name","week"]': { column_title: "Week" },
          '["name","near_holiday"]': { column_title: "Near Holiday" },
          '["name","Number of Employee"]': { show_mini_bar: true },
          '["name","Count"]': { show_mini_bar: true }
        },
        series_settings: { "Number of Employee": { color: "#F9D45C" } },
        "graph.dimensions": ["week"]
      },
      dashboard_id: 12,
      sizeY: 8,
      row: 49
    },
    {
      sizeX: 18,
      series: [],
      card: {
        id: 319,
        name: "Line Employee Total Leave with Sick/Annual Leave History [Native]",
        description: null,
        display: "bar",
        visualization_settings: {
          "graph.y_axis.title_text": "Number of Employee",
          "graph.x_axis.labels_enabled": false,
          "table.cell_column": "Annual Leave",
          "card.title": "Employee Absence History",
          "graph.metrics": ["Number of Employee"],
          "table.pivot_column": "Sick Leave",
          series_settings: {
            "Total Employee": { color: "#EF8C8C" },
            "Sick Leave": { color: "#F9D45C" },
            "Annual Leave": { color: "#88BF4D" }
          },
          "graph.dimensions": ["Period", "Absence Status"],
          "stackable.stack_type": "stacked"
        },
        dataset_query: {
          type: "native",
          native: {
            "template-tags": {
              calendar_date: {
                id: "2fc64927-e034-dbe4-efa0-d4e6b2f3e3d7",
                name: "calendar_date",
                "display-name": "Calendar date",
                type: "dimension",
                dimension: ["field", 1593, null],
                "widget-type": "date/range"
              },
              company_location: {
                id: "93b9b00a-551d-c755-a7ca-e0a8fcb72931",
                name: "company_location",
                "display-name": "Company location",
                type: "dimension",
                dimension: ["field", 1590, null],
                "widget-type": "category"
              },
              job_level: {
                id: "37baf5e7-0f60-f6d8-b04f-c1e713d10a2b",
                name: "job_level",
                "display-name": "Job level",
                type: "dimension",
                dimension: ["field", 1584, null],
                "widget-type": "category"
              },
              job_title: {
                id: "bfe582bd-285d-5c6f-fd38-219172e00434",
                name: "job_title",
                "display-name": "Job title",
                type: "dimension",
                dimension: ["field", 1581, null],
                "widget-type": "category"
              },
              organization: {
                id: "37cc574f-3dd2-cec3-bade-5a76abda1615",
                name: "organization",
                "display-name": "Organization",
                type: "dimension",
                dimension: ["field", 1589, null],
                "widget-type": "category"
              },
              empoyee_name: {
                id: "daf74d7d-0085-79ae-35a8-bf06aa8b6b0e",
                name: "empoyee_name",
                "display-name": "Empoyee name",
                type: "dimension",
                dimension: ["field", 1588, null],
                "widget-type": "category"
              },
              employee_id: {
                id: "7afa4e7d-1f27-b385-2f66-f9297ba2eb02",
                name: "employee_id",
                "display-name": "Employee ID",
                type: "dimension",
                dimension: ["field", 1587, null],
                "widget-type": "category"
              }
            }
          }
        }
      },
      col: 0,
      id: 432,
      parameter_mappings: [
        { parameter_id: "7da13cd7", card_id: 319, target: ["dimension", ["template-tag", "calendar_date"]] },
        { parameter_id: "5b0c3613", card_id: 319, target: ["dimension", ["template-tag", "company_location"]] },
        { parameter_id: "5d935e00", card_id: 319, target: ["dimension", ["template-tag", "job_level"]] },
        { parameter_id: "b952228e", card_id: 319, target: ["dimension", ["template-tag", "job_title"]] },
        { parameter_id: "d33b986f", card_id: 319, target: ["dimension", ["template-tag", "organization"]] }
      ],
      card_id: 319,
      visualization_settings: {
        "graph.y_axis.title_text": "Number of Employee",
        click_behavior: {
          targetId: 51,
          parameterMapping: {
            ac474ff2: {
              source: { type: "parameter", id: "b952228e", name: "Job Title" },
              target: { type: "parameter", id: "ac474ff2" },
              id: "ac474ff2"
            },
            "2dad8138": {
              source: { type: "parameter", id: "5b0c3613", name: "Company Location" },
              target: { type: "parameter", id: "2dad8138" },
              id: "2dad8138"
            },
            "1f884750": {
              source: { type: "parameter", id: "7da13cd7", name: "Date Filter" },
              target: { type: "parameter", id: "1f884750" },
              id: "1f884750"
            },
            "644b1c66": {
              source: { type: "parameter", id: "5d935e00", name: "Job Level" },
              target: { type: "parameter", id: "644b1c66" },
              id: "644b1c66"
            },
            "8516e63a": {
              source: { type: "parameter", id: "d33b986f", name: "Organization" },
              target: { type: "parameter", id: "8516e63a" },
              id: "8516e63a"
            }
          },
          linkType: "dashboard",
          type: "link"
        },
        "graph.x_axis.labels_enabled": false,
        "table.cell_column": "Annual Leave",
        "card.title": "Employee Absence History",
        "graph.metrics": ["Number of Employee"],
        "card.description": "Click the bar chart to see more details.",
        "table.pivot_column": "Sick Leave",
        series_settings: {
          "Total Employee": { color: "#EF8C8C" },
          "Sick Leave": { color: "#F9D45C" },
          "Annual Leave": { color: "#88BF4D" }
        },
        "graph.dimensions": ["Period", "Absence Status"],
        "stackable.stack_type": "stacked"
      },
      dashboard_id: 12,
      sizeY: 6,
      row: 3
    },
    {
      sizeX: 9,
      series: [],
      card: {
        id: 112,
        name: "Gauge Monthly Average Percentage Employee Leave Early [Native]",
        description:
          "Percentage of employee leave early in given date filter. Percentage number is generated by the total number of employee leave early divided by total employee in given date filter.",
        display: "gauge",
        visualization_settings: {
          "table.pivot_column": "avg_working_hour",
          "table.cell_column": "grouped_date",
          "scalar.switch_positive_negative": false,
          "gauge.segments": [
            { min: 0, max: 0.05, color: "#84BB4C", label: "" },
            { min: 0.05, max: 0.25, color: "#F9CF48", label: "" },
            { min: 0.25, max: 1, color: "#ED6E6E", label: "" }
          ],
          "card.title": "Average Employees Leave Early",
          click_behavior: {
            type: "link",
            linkType: "dashboard",
            parameterMapping: {
              "1f473b50": {
                source: { type: "parameter", id: "d33b986f", name: "Organization" },
                target: { type: "parameter", id: "1f473b50" },
                id: "1f473b50"
              },
              bde8d0a6: {
                source: { type: "parameter", id: "5d935e00", name: "Job Level" },
                target: { type: "parameter", id: "bde8d0a6" },
                id: "bde8d0a6"
              },
              a7b4ced9: {
                source: { type: "parameter", id: "a4cf11aa", name: "Date Filter" },
                target: { type: "parameter", id: "a7b4ced9" },
                id: "a7b4ced9"
              },
              bfa4f492: {
                source: { type: "parameter", id: "5b0c3613", name: "Company Location" },
                target: { type: "parameter", id: "bfa4f492" },
                id: "bfa4f492"
              },
              a846211: {
                source: { type: "parameter", id: "b952228e", name: "Job Title" },
                target: { type: "parameter", id: "a846211" },
                id: "a846211"
              },
              "2760a486": {
                source: { type: "parameter", id: "7da13cd7", name: "Date Filter" },
                target: { type: "parameter", id: "2760a486" },
                id: "2760a486"
              }
            },
            targetId: 19
          },
          column_settings: {
            '["name","average_percentage_employee_come_late"]': { number_style: "percent" },
            '["name","average_percentage_employee_leave_early"]': { number_style: "percent" }
          }
        },
        dataset_query: {
          type: "native",
          native: {
            "template-tags": {
              calendar_date: {
                id: "14922cfa-221a-5b38-6be4-acf1511ac25a",
                name: "calendar_date",
                "display-name": "Calendar date",
                type: "dimension",
                dimension: ["field", 1593, null],
                "widget-type": "date/range",
                required: false
              },
              company_location: {
                id: "0e748d30-071b-e0e2-16c7-52a4de03cbc0",
                name: "company_location",
                "display-name": "Company location",
                type: "dimension",
                dimension: ["field", 1590, null],
                "widget-type": "category"
              },
              job_level: {
                id: "300eba70-ae7c-c35b-85ab-7c786a51bddd",
                name: "job_level",
                "display-name": "Job level",
                type: "dimension",
                dimension: ["field", 1584, null],
                "widget-type": "category"
              },
              job_title: {
                id: "8e4840ee-025a-2564-38ab-1dbbfa4bda55",
                name: "job_title",
                "display-name": "Job title",
                type: "dimension",
                dimension: ["field", 1581, null],
                "widget-type": "category"
              },
              organization: {
                id: "f3c10efa-1664-bc6e-9113-b20128769ffd",
                name: "organization",
                "display-name": "Organization",
                type: "dimension",
                dimension: ["field", 1589, null],
                "widget-type": "category"
              },
              employee_id: {
                id: "7507b64c-1b93-2769-1b36-a8e779018ff8",
                name: "employee_id",
                "display-name": "Employee id",
                type: "dimension",
                dimension: ["field", 1587, null],
                "widget-type": "category"
              }
            }
          }
        }
      },
      col: 9,
      id: 433,
      parameter_mappings: [
        { parameter_id: "7da13cd7", card_id: 112, target: ["dimension", ["template-tag", "calendar_date"]] },
        { parameter_id: "5b0c3613", card_id: 112, target: ["dimension", ["template-tag", "company_location"]] },
        { parameter_id: "5d935e00", card_id: 112, target: ["dimension", ["template-tag", "job_level"]] },
        { parameter_id: "b952228e", card_id: 112, target: ["dimension", ["template-tag", "job_title"]] },
        { parameter_id: "d33b986f", card_id: 112, target: ["dimension", ["template-tag", "organization"]] }
      ],
      card_id: 112,
      visualization_settings: {
        "table.pivot_column": "avg_working_hour",
        "table.cell_column": "grouped_date",
        "scalar.switch_positive_negative": false,
        "gauge.segments": [
          { min: 0, max: 0.05, color: "#84BB4C", label: "" },
          { min: 0.05, max: 0.25, color: "#F9CF48", label: "" },
          { min: 0.25, max: 1, color: "#ED6E6E", label: "" }
        ],
        "card.title": "Average Leave Early (%)",
        click_behavior: {
          type: "link",
          linkType: "dashboard",
          parameterMapping: {
            "1f473b50": {
              source: { type: "parameter", id: "d33b986f", name: "Organization" },
              target: { type: "parameter", id: "1f473b50" },
              id: "1f473b50"
            },
            bde8d0a6: {
              source: { type: "parameter", id: "5d935e00", name: "Job Level" },
              target: { type: "parameter", id: "bde8d0a6" },
              id: "bde8d0a6"
            },
            a7b4ced9: {
              source: { type: "parameter", id: "a4cf11aa", name: "Date Filter" },
              target: { type: "parameter", id: "a7b4ced9" },
              id: "a7b4ced9"
            },
            bfa4f492: {
              source: { type: "parameter", id: "5b0c3613", name: "Company Location" },
              target: { type: "parameter", id: "bfa4f492" },
              id: "bfa4f492"
            },
            a846211: {
              source: { type: "parameter", id: "b952228e", name: "Job Title" },
              target: { type: "parameter", id: "a846211" },
              id: "a846211"
            },
            "2760a486": {
              source: { type: "parameter", id: "7da13cd7", name: "Date Filter" },
              target: { type: "parameter", id: "2760a486" },
              id: "2760a486"
            }
          },
          targetId: 19
        },
        column_settings: {
          '["name","average_percentage_employee_come_late"]': { number_style: "percent" },
          '["name","average_percentage_employee_leave_early"]': { number_style: "percent" }
        }
      },
      dashboard_id: 12,
      sizeY: 6,
      row: 27
    },
    {
      sizeX: 9,
      series: [],
      card: {
        id: 107,
        name: "Gauge Monthly Average Percentage Employee Come Late [Native]",
        description:
          "Percentage of employee come late in given date filter. Percentage number is generated by the total number of employee come late divided by total employee in given date filter.",
        display: "gauge",
        visualization_settings: {
          "table.pivot_column": "avg_working_hour",
          "table.cell_column": "grouped_date",
          "scalar.switch_positive_negative": false,
          "gauge.segments": [
            { min: 0, max: 0.05, color: "#84BB4C", label: "" },
            { min: 0.05, max: 0.25, color: "#F9CF48", label: "" },
            { min: 0.25, max: 1, color: "#ED6E6E", label: "" }
          ],
          "card.title": "Average Employees Come Late",
          click_behavior: {
            type: "link",
            linkType: "dashboard",
            parameterMapping: {
              b3798869: {
                source: { type: "parameter", id: "d33b986f", name: "Organization" },
                target: { type: "parameter", id: "b3798869" },
                id: "b3798869"
              },
              "5c098444": {
                source: { type: "parameter", id: "5d935e00", name: "Job Level" },
                target: { type: "parameter", id: "5c098444" },
                id: "5c098444"
              },
              deadcfe: {
                source: { type: "parameter", id: "a4cf11aa", name: "Date Filter" },
                target: { type: "parameter", id: "deadcfe" },
                id: "deadcfe"
              },
              "9912c4e7": {
                source: { type: "parameter", id: "5b0c3613", name: "Company Location" },
                target: { type: "parameter", id: "9912c4e7" },
                id: "9912c4e7"
              },
              db964e3d: {
                source: { type: "parameter", id: "b952228e", name: "Job Title" },
                target: { type: "parameter", id: "db964e3d" },
                id: "db964e3d"
              },
              "639f645a": {
                source: { type: "parameter", id: "7da13cd7", name: "Date Filter" },
                target: { type: "parameter", id: "639f645a" },
                id: "639f645a"
              }
            },
            targetId: 18
          },
          column_settings: { '["name","average_percentage_employee_come_late"]': { number_style: "percent" } }
        },
        dataset_query: {
          type: "native",
          native: {
            "template-tags": {
              calendar_date: {
                id: "14922cfa-221a-5b38-6be4-acf1511ac25a",
                name: "calendar_date",
                "display-name": "Calendar date",
                type: "dimension",
                dimension: ["field", 1593, null],
                "widget-type": "date/range",
                required: false
              },
              company_location: {
                id: "0e748d30-071b-e0e2-16c7-52a4de03cbc0",
                name: "company_location",
                "display-name": "Company location",
                type: "dimension",
                dimension: ["field", 1590, null],
                "widget-type": "category"
              },
              job_level: {
                id: "300eba70-ae7c-c35b-85ab-7c786a51bddd",
                name: "job_level",
                "display-name": "Job level",
                type: "dimension",
                dimension: ["field", 1584, null],
                "widget-type": "category"
              },
              job_title: {
                id: "8e4840ee-025a-2564-38ab-1dbbfa4bda55",
                name: "job_title",
                "display-name": "Job title",
                type: "dimension",
                dimension: ["field", 1581, null],
                "widget-type": "category"
              },
              organization: {
                id: "f3c10efa-1664-bc6e-9113-b20128769ffd",
                name: "organization",
                "display-name": "Organization",
                type: "dimension",
                dimension: ["field", 1589, null],
                "widget-type": "category"
              },
              employee_id: {
                id: "32392b64-58a4-7675-6c68-eb701ba50276",
                name: "employee_id",
                "display-name": "Employee id",
                type: "dimension",
                dimension: ["field", 1587, null],
                "widget-type": "category"
              }
            }
          }
        }
      },
      col: 0,
      id: 434,
      parameter_mappings: [
        { parameter_id: "7da13cd7", card_id: 107, target: ["dimension", ["template-tag", "calendar_date"]] },
        { parameter_id: "5b0c3613", card_id: 107, target: ["dimension", ["template-tag", "company_location"]] },
        { parameter_id: "5d935e00", card_id: 107, target: ["dimension", ["template-tag", "job_level"]] },
        { parameter_id: "b952228e", card_id: 107, target: ["dimension", ["template-tag", "job_title"]] },
        { parameter_id: "d33b986f", card_id: 107, target: ["dimension", ["template-tag", "organization"]] }
      ],
      card_id: 107,
      visualization_settings: {
        "table.pivot_column": "avg_working_hour",
        "table.cell_column": "grouped_date",
        "scalar.switch_positive_negative": false,
        "gauge.segments": [
          { min: 0, max: 0.05, color: "#84BB4C", label: "Good" },
          { min: 0.05, max: 0.25, color: "#F9CF48", label: "Warning" },
          { min: 0.25, max: 1, color: "#ED6E6E", label: "Danger" }
        ],
        "card.title": "Average Come Late (%)",
        click_behavior: {
          type: "link",
          linkType: "dashboard",
          parameterMapping: {
            b3798869: {
              source: { type: "parameter", id: "d33b986f", name: "Organization" },
              target: { type: "parameter", id: "b3798869" },
              id: "b3798869"
            },
            "5c098444": {
              source: { type: "parameter", id: "5d935e00", name: "Job Level" },
              target: { type: "parameter", id: "5c098444" },
              id: "5c098444"
            },
            deadcfe: {
              source: { type: "parameter", id: "a4cf11aa", name: "Date Filter" },
              target: { type: "parameter", id: "deadcfe" },
              id: "deadcfe"
            },
            "9912c4e7": {
              source: { type: "parameter", id: "5b0c3613", name: "Company Location" },
              target: { type: "parameter", id: "9912c4e7" },
              id: "9912c4e7"
            },
            db964e3d: {
              source: { type: "parameter", id: "b952228e", name: "Job Title" },
              target: { type: "parameter", id: "db964e3d" },
              id: "db964e3d"
            },
            "639f645a": {
              source: { type: "parameter", id: "7da13cd7", name: "Date Filter" },
              target: { type: "parameter", id: "639f645a" },
              id: "639f645a"
            }
          },
          targetId: 18
        },
        column_settings: { '["name","average_percentage_employee_come_late"]': { number_style: "percent" } }
      },
      dashboard_id: 12,
      sizeY: 6,
      row: 27
    },
    {
      sizeX: 9,
      series: [],
      card: {
        id: 349,
        name: "Table Employee Taking Sick Leave Near Annual Leave [Native]",
        description: null,
        display: "table",
        visualization_settings: {},
        dataset_query: {
          type: "native",
          native: {
            "template-tags": {
              date: {
                id: "bc3dd4d5-bde5-e072-2614-20ef3a86d202",
                name: "date",
                "display-name": "Date",
                type: "dimension",
                dimension: ["field", 1591, null],
                "widget-type": "date/range"
              },
              company_location: {
                id: "7a9f27c4-e0b7-5815-6ac8-952ffbe53159",
                name: "company_location",
                "display-name": "Company location",
                type: "dimension",
                dimension: ["field", 1590, null],
                "widget-type": "category"
              },
              job_level: {
                id: "ee288581-607b-17f1-09db-9618b1363087",
                name: "job_level",
                "display-name": "Job level",
                type: "dimension",
                dimension: ["field", 1584, null],
                "widget-type": "category"
              },
              job_title: {
                id: "635f1f6a-b518-b09b-955c-c166d4baa518",
                name: "job_title",
                "display-name": "Job title",
                type: "dimension",
                dimension: ["field", 1581, null],
                "widget-type": "category"
              },
              organization: {
                id: "fb54656e-6a21-5061-e2b6-75c07d3ada0b",
                name: "organization",
                "display-name": "Organization",
                type: "dimension",
                dimension: ["field", 1589, null],
                "widget-type": "category"
              },
              employee_name: {
                id: "bce5f1b3-3690-0b6b-706f-9293b285c288",
                name: "employee_name",
                "display-name": "Employee name",
                type: "dimension",
                dimension: ["field", 1588, null],
                "widget-type": "category"
              },
              employee_id: {
                id: "b21179a7-0cd5-b549-783c-e2927a11199a",
                name: "employee_id",
                "display-name": "Employee",
                type: "dimension",
                dimension: ["field", 1587, null],
                "widget-type": "category"
              }
            }
          }
        }
      },
      col: 0,
      id: 545,
      parameter_mappings: [
        { parameter_id: "7da13cd7", card_id: 349, target: ["dimension", ["template-tag", "date"]] },
        { parameter_id: "5b0c3613", card_id: 349, target: ["dimension", ["template-tag", "company_location"]] },
        { parameter_id: "5d935e00", card_id: 349, target: ["dimension", ["template-tag", "job_level"]] },
        { parameter_id: "b952228e", card_id: 349, target: ["dimension", ["template-tag", "job_title"]] },
        { parameter_id: "d33b986f", card_id: 349, target: ["dimension", ["template-tag", "organization"]] }
      ],
      card_id: 349,
      visualization_settings: {
        "card.title": "Employee Taking Sick Leave Near Annual Leave",
        "card.description":
          "List of employee who took sick leave near their annual leave date in given date filter. Click the Employee-ID to see more details.",
        column_settings: {
          '["name","Employee ID"]': {
            click_behavior: {
              type: "link",
              linkType: "dashboard",
              parameterMapping: {
                b39a0087: {
                  source: { type: "parameter", id: "7da13cd7", name: "Date Filter" },
                  target: { type: "parameter", id: "b39a0087" },
                  id: "b39a0087"
                },
                "19111ec7": {
                  source: { type: "column", id: "Employee ID", name: "Employee ID" },
                  target: { type: "parameter", id: "19111ec7" },
                  id: "19111ec7"
                }
              },
              targetId: 14
            }
          }
        }
      },
      dashboard_id: 12,
      sizeY: 6,
      row: 15
    }
  ],
  param_values: {
    "1581": {
      values: [
        "Job Title 1486",
        "Job Title 1862",
        "Job Title 2196",
        "Job Title 2578",
        "Job Title 2724",
        "Job Title 2893",
        "Job Title 299",
        "Job Title 3632",
        "Job Title 3853",
        "Job Title 388",
        "Job Title 4033",
        "Job Title 4163",
        "Job Title 4446",
        "Job Title 4811",
        "Job Title 4943",
        "Job Title 5093",
        "Job Title 5164",
        "Job Title 5331",
        "Job Title 5482",
        "Job Title 5496",
        "Job Title 5867",
        "Job Title 6051",
        "Job Title 6290",
        "Job Title 6363",
        "Job Title 6812",
        "Job Title 6827",
        "Job Title 6883",
        "Job Title 7195",
        "Job Title 731",
        "Job Title 7358",
        "Job Title 7370",
        "Job Title 7394",
        "Job Title 7914",
        "Job Title 8337",
        "Job Title 8394",
        "Job Title 8796",
        "Job Title 9025",
        "Job Title 9058",
        "Job Title 9332",
        "Job Title 9716",
        "Job Title 9896",
        "Job Title 9972",
        "Job Title 9980",
        null
      ],
      human_readable_values: [],
      field_id: 1581
    },
    "1584": {
      values: [
        "Job Level 1073",
        "Job Level 2660",
        "Job Level 3079",
        "Job Level 3762",
        "Job Level 5188",
        "Job Level 6674",
        "Job Level 6685",
        "Job Level 6933",
        "Job Level 8345",
        null
      ],
      human_readable_values: [],
      field_id: 1584
    },
    "1589": {
      values: [
        "Organization 210",
        "Organization 2124",
        "Organization 2756",
        "Organization 3160",
        "Organization 4677",
        "Organization 482",
        "Organization 6804",
        "Organization 9750",
        null
      ],
      human_readable_values: [],
      field_id: 1589
    },
    "1590": {
      values: [
        "Location 2287",
        "Location 3840",
        "Location 4743",
        "Location 5017",
        "Location 8375",
        "Location 9959",
        null
      ],
      human_readable_values: [],
      field_id: 1590
    }
  },
  param_fields: {
    "1581": {
      id: 1581,
      table_id: 201,
      display_name: "job_role",
      base_type: "type/Text",
      semantic_type: "type/Category",
      has_field_values: "list",
      name_field: null,
      dimensions: []
    },
    "1584": {
      id: 1584,
      table_id: 201,
      display_name: "job_level",
      base_type: "type/Text",
      semantic_type: "type/Category",
      has_field_values: "list",
      name_field: null,
      dimensions: []
    },
    "1587": {
      id: 1587,
      table_id: 201,
      display_name: "employee_id",
      base_type: "type/Text",
      semantic_type: "type/Category",
      has_field_values: "search",
      name_field: null,
      dimensions: []
    },
    "1588": {
      id: 1588,
      table_id: 201,
      display_name: "employee_name",
      base_type: "type/Text",
      semantic_type: "type/Category",
      has_field_values: "search",
      name_field: null,
      dimensions: []
    },
    "1589": {
      id: 1589,
      table_id: 201,
      display_name: "organization",
      base_type: "type/Text",
      semantic_type: "type/Category",
      has_field_values: "list",
      name_field: null,
      dimensions: []
    },
    "1590": {
      id: 1590,
      table_id: 201,
      display_name: "company_location",
      base_type: "type/Text",
      semantic_type: "type/Company",
      has_field_values: "list",
      name_field: null,
      dimensions: []
    },
    "1591": {
      id: 1591,
      table_id: 201,
      display_name: "attendance_date",
      base_type: "type/Date",
      semantic_type: null,
      has_field_values: "none",
      name_field: null,
      dimensions: []
    },
    "1593": {
      id: 1593,
      table_id: 200,
      display_name: "calendar_date",
      base_type: "type/Date",
      semantic_type: null,
      has_field_values: "none",
      name_field: null,
      dimensions: []
    }
  }
};

export const jsonData = {
  data: {
    rows: [[0.16569200779727095]],
    cols: [
      {
        display_name: "average_percentage_employee_leave_early",
        source: "native",
        field_ref: ["field", "average_percentage_employee_leave_early", { "base-type": "type/Float" }],
        name: "average_percentage_employee_leave_early",
        base_type: "type/Float"
      }
    ],
    insights: null,
    requested_timezone: "Asia/Jakarta",
    results_timezone: "UTC"
  },
  json_query: {
    parameters: [
      {
        slug: "date_filter",
        default: "2021-05-01~2021-07-31",
        name: "Date Filter",
        value: "2021-05-01~2021-07-31",
        type: "date/range",
        sectionId: "date",
        id: "7da13cd7",
        field_ids: [1593, 1591],
        target: ["dimension", ["template-tag", "calendar_date"]],
        field_id: null,
        hasOnlyFieldTargets: false
      }
    ]
  },
  status: "completed"
};
