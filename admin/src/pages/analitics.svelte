<script>
  import { onMount } from "svelte";
  import server from "../middleware/api";
  import alertMessage from "../middleware/alertMessage";
  import * as d3 from "d3";
  let loading = $state(true);
  let svg = $state();
  let width = 400;
  let height = 400;
  let radius = 200;
  onMount(async () => {
    try {
      let getData = await server.get("/admin/analitics");
      let loading = !getData.data;
      const data = [
        { label: "Свободно", value: getData.data.free, color: "steelblue" },
        {
          label: "Занято",
          value: getData.data.size - getData.data.free,
          color: "crimson",
        },
      ];

      const pie = d3.pie().value((d) => d.value)(data);
      const arcHover = d3.arc().innerRadius(0).outerRadius(radius);
      const arc = d3
        .arc()
        .innerRadius(0)
        .outerRadius(radius - 10);
      const svgEl = d3
        .select(svg)
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);
      svgEl
        .selectAll("path")
        .data(pie)
        .enter()
        .append("path")
        .attr("d", arc)
        .attr("fill", (d) => d.data.color) // цвет из данных
        .attr("stroke", "white")
        .attr("stroke-width", 2)
        .style("cursor", "pointer")
        .on("mouseover", function (event, d) {
          d3.select(this).transition().duration(200).attr("d", arcHover);
        })
        .on("mouseout", function (event, d) {
          d3.select(this).transition().duration(200).attr("d", arc); // возвращаем размер
          // возвращаем исходный цвет
        });
      svgEl
        .selectAll("text.sector-label")
        .data(pie)
        .enter()
        .append("text")
        .attr("class", "sector-label")
        .attr("transform", (d) => `translate(${arc.centroid(d)})`) // позиция в центре сектора
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .style("font-size", "14px")
        .style("fill", "white") // цвет текста
        .text((d) => d.data.value);
      // Текст в центре
      svgEl
        .append("rect")
        .attr("x", -75)
        .attr("y", -75)
        .attr("width", 150)
        .attr("height", 150)
        .attr("rx", 150 / 2)
        .attr("fill", "white"); // фон

      svgEl
        .append("text")
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .style("font-size", "24px")
        .style("font-weight", "bold")
        .text(`${getData.data.size} GB`);
    } catch (err) {
      alertMessage("error", err);
    }
  });
</script>

{#if loading}
  <svg bind:this={svg}></svg>
{:else}
  <p>Loading...</p>
{/if}
