        const statuses = [
            { status: "Оформлен", completed: true },
            { status: "Оплачен", completed: true },
            { status: "Приехал на склад страны покупки", completed: true },
            { status: "Отправлен в Москву", completed: false },
            { status: "Приехал в Москву", completed: false },
            { status: "Передан в службу доставки", completed: false },
            { status: "Прибыл", completed: false }
        ];

        const margin = { top: 40, right: 20, bottom: 20, left: 20 };
        const width = 500;
        const height = 300;
        const circleRadius = 10;
        const circleSpacing = 50;

        // Создание SVG контейнера
        const svg = d3.select("#timeline")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        // Создание линии
        svg.append("line")
            .attr("x1", width / 2)
            .attr("y1", 0)
            .attr("x2", width / 2)
            .attr("y2", height)
            .attr("stroke", "#fffee6")
            .attr("stroke-width", 2);

        // Создание кругов для каждого статуса
        statuses.forEach((d, i) => {
            const y = i * circleSpacing;

            // Круг
            svg.append("circle")
                .attr("cx", width / 2)
                .attr("cy", y)
                .attr("r", circleRadius)
                .attr("class", `status ${d.completed ? "completed" : "pending"}`);

            // Текст
            svg.append("text")
                .attr("x", width / 2 + circleRadius + 10)
                .attr("y", y + 5)
                .attr("class", "status-text")
                .text(d.status);
        });
