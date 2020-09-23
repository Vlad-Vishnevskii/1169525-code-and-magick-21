'use strict';
const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const CLOUD_OFFSET = 10;
const FONT_GAP = 15;
const LATERAL_GAP = 50;
const BAR_WIDTH = 40;
const barHeight = 150;
const TEXT_SIZE = 62;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_OFFSET, CLOUD_Y + CLOUD_OFFSET, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#fff`);

  ctx.font = `16px PT Mono`;
  ctx.fillStyle = `#000`;
  ctx.fillText(`Ура вы победили!`, 115, 42);
  ctx.font = `16px PT Mono`;
  ctx.fillText(`Список результатов:`, 115, 62);

  let maxTime = getMaxElement(times);

  for (let i = 0; i < players.length; i++) {
    let gapBarWidth = CLOUD_X + LATERAL_GAP + (LATERAL_GAP + BAR_WIDTH) * i;
    ctx.fillStyle = `#000`;
    ctx.fillText(
        Math.round(times[i]),
        gapBarWidth,
        CLOUD_HEIGHT - ((barHeight * times[i]) / maxTime) - (FONT_GAP * 2)
    );

    if (players[i] === `Вы`) {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    } else {
      ctx.fillStyle = `hsl(223, ` + i * 69 + `%, 58%)`;
    }

    ctx.fillRect(
        gapBarWidth,
        CLOUD_Y + TEXT_SIZE + FONT_GAP * 2 + (barHeight - (barHeight * times[i]) / maxTime),
        BAR_WIDTH,
        (barHeight * times[i]) / maxTime
    );

    ctx.fillStyle = `#000`;
    ctx.fillText(
        players[i],
        gapBarWidth,
        CLOUD_HEIGHT
    );
  }
};
