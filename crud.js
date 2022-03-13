
const crudData = [
    {
      "FUNC_NAME": "func6",
      "TABLE_NAME": "table5",
      "CRUD": "C"
    },
    {
      "FUNC_NAME": "func2",
      "TABLE_NAME": "table3",
      "CRUD": "R"
    },
    {
      "FUNC_NAME": "func1",
      "TABLE_NAME": "table4",
      "CRUD": "R"
    },
    {
      "FUNC_NAME": "func1",
      "TABLE_NAME": "table2",
      "CRUD": "R"
    },
    {
      "FUNC_NAME": "func8",
      "TABLE_NAME": "table4",
      "CRUD": "U"
    },
    {
      "FUNC_NAME": "func3",
      "TABLE_NAME": "table2",
      "CRUD": "C"
    },
    {
      "FUNC_NAME": "func1",
      "TABLE_NAME": "table5",
      "CRUD": "R"
    },
    {
      "FUNC_NAME": "func2",
      "TABLE_NAME": "table4",
      "CRUD": "R"
    },
    {
      "FUNC_NAME": "func3",
      "TABLE_NAME": "table1",
      "CRUD": "C"
    },
    {
      "FUNC_NAME": "func1",
      "TABLE_NAME": "table5",
      "CRUD": "C"
    },
    {
      "FUNC_NAME": "func4",
      "TABLE_NAME": "table1",
      "CRUD": "R"
    },
    {
      "FUNC_NAME": "func6",
      "TABLE_NAME": "table1",
      "CRUD": "R"
    },
    {
      "FUNC_NAME": "func3",
      "TABLE_NAME": "table1",
      "CRUD": "D"
    },
    {
      "FUNC_NAME": "func6",
      "TABLE_NAME": "table5",
      "CRUD": "R"
    },
    {
      "FUNC_NAME": "func6",
      "TABLE_NAME": "table3",
      "CRUD": "C"
    },
    {
      "FUNC_NAME": "func1",
      "TABLE_NAME": "table1",
      "CRUD": "C"
    },
    {
      "FUNC_NAME": "func5",
      "TABLE_NAME": "table4",
      "CRUD": "C"
    },
    {
      "FUNC_NAME": "func2",
      "TABLE_NAME": "table2",
      "CRUD": "U"
    },
    {
      "FUNC_NAME": "func8",
      "TABLE_NAME": "table4",
      "CRUD": "C"
    },
    {
      "FUNC_NAME": "func4",
      "TABLE_NAME": "table5",
      "CRUD": "C"
    },
    {
      "FUNC_NAME": "func2",
      "TABLE_NAME": "table4",
      "CRUD": "U"
    },
    {
      "FUNC_NAME": "func8",
      "TABLE_NAME": "table4",
      "CRUD": "D"
    },
    {
      "FUNC_NAME": "func7",
      "TABLE_NAME": "table3",
      "CRUD": "U"
    },
    {
      "FUNC_NAME": "func6",
      "TABLE_NAME": "table1",
      "CRUD": "D"
    },
    {
      "FUNC_NAME": "func8",
      "TABLE_NAME": "table4",
      "CRUD": "C"
    },
    {
      "FUNC_NAME": "func7",
      "TABLE_NAME": "table3",
      "CRUD": "C"
    },
    {
      "FUNC_NAME": "func5",
      "TABLE_NAME": "table5",
      "CRUD": "D"
    },
    {
      "FUNC_NAME": "func1",
      "TABLE_NAME": "table3",
      "CRUD": "D"
    },
    {
      "FUNC_NAME": "func5",
      "TABLE_NAME": "table5",
      "CRUD": "R"
    },
    {
      "FUNC_NAME": "func7",
      "TABLE_NAME": "table2",
      "CRUD": "D"
    },
    {
      "FUNC_NAME": "func6",
      "TABLE_NAME": "table1",
      "CRUD": "R"
    },
    {
      "FUNC_NAME": "func7",
      "TABLE_NAME": "table5",
      "CRUD": "R"
    },
    {
      "FUNC_NAME": "func8",
      "TABLE_NAME": "table2",
      "CRUD": "R"
    },
    {
      "FUNC_NAME": "func7",
      "TABLE_NAME": "table1",
      "CRUD": "U"
    },
    {
      "FUNC_NAME": "func5",
      "TABLE_NAME": "table2",
      "CRUD": "C"
    },
    {
      "FUNC_NAME": "func6",
      "TABLE_NAME": "table2",
      "CRUD": "R"
    },
    {
      "FUNC_NAME": "func2",
      "TABLE_NAME": "table3",
      "CRUD": "R"
    },
    {
      "FUNC_NAME": "func1",
      "TABLE_NAME": "table2",
      "CRUD": "D"
    },
    {
      "FUNC_NAME": "func1",
      "TABLE_NAME": "table5",
      "CRUD": "C"
    },
    {
      "FUNC_NAME": "func6",
      "TABLE_NAME": "table3",
      "CRUD": "C"
    },
    {
      "FUNC_NAME": "func8",
      "TABLE_NAME": "table1",
      "CRUD": "C"
    },
    {
      "FUNC_NAME": "func7",
      "TABLE_NAME": "table4",
      "CRUD": "U"
    },
    {
      "FUNC_NAME": "func4",
      "TABLE_NAME": "table2",
      "CRUD": "R"
    },
    {
      "FUNC_NAME": "func7",
      "TABLE_NAME": "table2",
      "CRUD": "D"
    },
    {
      "FUNC_NAME": "func7",
      "TABLE_NAME": "table1",
      "CRUD": "U"
    },
    {
      "FUNC_NAME": "func1",
      "TABLE_NAME": "table5",
      "CRUD": "C"
    },
    {
      "FUNC_NAME": "func2",
      "TABLE_NAME": "table2",
      "CRUD": "R"
    },
    {
      "FUNC_NAME": "func1",
      "TABLE_NAME": "table2",
      "CRUD": "R"
    },
    {
      "FUNC_NAME": "func6",
      "TABLE_NAME": "table3",
      "CRUD": "U"
    },
    {
      "FUNC_NAME": "func4",
      "TABLE_NAME": "table5",
      "CRUD": "D"
    }
  ]

function createCrudData(mode, rows) {
    const functions = new Set()
    const tables = new Set()
    const cruds = {}
    const crudBase = () => {
        return { C:'&nbsp;',R:'&nbsp;',U:'&nbsp;',D:'&nbsp;' }
    }

    rows.forEach(row => {
        functions.add(row.FUNC_NAME)
        tables.add(row.TABLE_NAME)
        const key = `${row.FUNC_NAME}::${row.TABLE_NAME}`
        if (!cruds[key]) {
            cruds[key] = crudBase()
        }
        cruds[key][row.CRUD] = row.CRUD
    })

    var xAxis = tables
    var yAxis = functions

    if (!mode) {
        xAxis = functions
        yAxis = tables       
    }

    // table html生成
    const head = Array.from(xAxis).sort().map(table => {
        return `            <th class="rotate"><div><span>${table}</span></div></th>`
    }).join("\n")

    const body = Array.from(yAxis).sort().map((row,rowIdx) => {
        const crudTd = Array.from(xAxis).sort().map(col => {
            const key = mode ? `${row}::${col}` : `${col}::${row}`
            var crud = cruds[key]
            if (!crud) {
                crud = crudBase()
            }
            return `
                <td>
                    <table class="table-crud" cellpadding="0" border="0">
                    <tr>
                    <td class="crud_${crud.C}">${crud.C}</td>
                    <td class="crud_${crud.R}">${crud.R}</td>
                    </tr>
                    <tr>
                    <td class="crud_${crud.U}">${crud.U}</td>
                    <td class="crud_${crud.D}">${crud.D}</td>
                    </tr>
                    </table>
                </td>
            `
        }).join('\n')

        const odd = (rowIdx % 2) == 1 ? "odd" : "even"  
        return `
        <tr class="row_${odd}">
        <th class="row-header">${row}</th>
${crudTd}
        </tr>
        `
    }).join("\n")

    return `
<table class="table table-header-rotated">
    <thead>
        <tr>
            <th></th>
${head}
        </tr> 
    </thead>
    <tbody>
${body}
    </tbody>
</table>
    `
}