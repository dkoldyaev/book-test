import { memo, useMemo } from "react";
import { THydrogenMode } from "../hydrogen/types";
import Hydrogen from "../hydrogen/hydrogen";
import { array_shuffle } from '../../utils/array-shuffle'

export enum THydrogenCloudStepEnum {
  'stage1',
  'stage2',
  'stage3',
}

export type THydrogenCloudProps = {
  mode: THydrogenCloudStepEnum,
}

type TItemopsition = { x: number, y: number, mode: THydrogenMode, visible: boolean };

const positions: Record<THydrogenCloudStepEnum, { items: TItemopsition[], mode: THydrogenMode }> = {
  [THydrogenCloudStepEnum.stage1]: {
    items: [
      {
        x: 35,
        y: 31,
        mode: 'point',
        visible: true,
      },
      {
        x: 320,
        y: 12,
        mode: 'point',
        visible: true,
      },
      {
        x: 478,
        y: 28,
        mode: 'point',
        visible: true,
      },
      {
        x: 125,
        y: 82,
        mode: 'point',
        visible: true,
      },
      {
        x: 255,
        y: 60,
        mode: 'point',
        visible: true,
      },
      {
        x: 370,
        y: 73,
        mode: 'point',
        visible: true,
      },
      {
        x: 197,
        y: 105,
        mode: 'point',
        visible: true,
      },
      {
        x: 320,
        y: 123,
        mode: 'point',
        visible: true,
      },
      {
        x: 445,
        y: 140,
        mode: 'point',
        visible: true,
      },
      {
        x: 277,
        y: 145,
        mode: 'point',
        visible: true,
      },
      {
        x: 116,
        y: 170,
        mode: 'point',
        visible: true,
      },
      {
        x: 165,
        y: 176,
        mode: 'point',
        visible: true,
      },
      {
        x: 230,
        y: 185,
        mode: 'point',
        visible: true,
      },
      {
        x: 335,
        y: 170,
        mode: 'point',
        visible: true,
      },
      {
        x: 285,
        y: 202,
        mode: 'point',
        visible: true,
      },
      {
        x: 197,
        y: 224,
        mode: 'point',
        visible: true,
      },
      {
        x: 355,
        y: 225,
        mode: 'point',
        visible: true,
      },
      {
        x: 85,
        y: 230,
        mode: 'point',
        visible: true,
      },
      {
        x: 155,
        y: 240,
        mode: 'point',
        visible: true,
      },
      {
        x: 245,
        y: 230,
        mode: 'point',
        visible: true,
      },
      {
        x: 454,
        y: 240,
        mode: 'point',
        visible: true,
      },
      {
        x: 376,
        y: 266,
        mode: 'point',
        visible: true,
      },
      {
        x: 270,
        y: 279,
        mode: 'point',
        visible: true,
      },
      {
        x: 180,
        y: 286,
        mode: 'point',
        visible: true,
      },
      {
        x: 309,
        y: 297,
        mode: 'point',
        visible: true,
      },
      {
        x: 66,
        y: 326,
        mode: 'point',
        visible: true,
      },
      {
        x: 230,
        y: 317,
        mode: 'point',
        visible: true,
      },
      {
        x: 385,
        y: 340,
        mode: 'point',
        visible: true,
      },
      {
        x: 82,
        y: 425,
        mode: 'point',
        visible: true,
      },
      {
        x: 260,
        y: 410,
        mode: 'point',
        visible: true,
      },
      {
        x: 337,
        y: 410,
        mode: 'point',
        visible: true,
      },
      {
        x: 205,
        y: 500,
        mode: 'point',
        visible: true,
      },
      {
        x: 485,
        y: 490,
        mode: 'point',
        visible: true,
      },
      {
        x: 750,
        y: -20,
        mode: 'huge',
        visible: true,
      }
    ],
    mode: "point",
  },
  [THydrogenCloudStepEnum.stage2]: {
    items: [
      {
        x: 44,
        y: 26,
        mode: 'medium',
        visible: true,
      },
      {
        x: 258,
        y: 24,
        mode: 'medium',
        visible: true,
      },
      {
        x: 684,
        y: 1,
        mode: 'medium',
        visible: true,
      },
      {
        x: 478,
        y: 80,
        mode: 'medium',
        visible: true,
      },
      {
        x: 340,
        y: 117,
        mode: 'medium',
        visible: true,
      },
      {
        x: 245,
        y: 140,
        mode: 'medium',
        visible: true,
      },
      {
        x: 424,
        y: 155,
        mode: 'medium',
        visible: true,
      },
      {
        x: -16,
        y: 183,
        mode: 'medium',
        visible: true,
      },
      {
        x: 180,
        y: 190,
        mode: 'medium',
        visible: true,
      },
      {
        x: 320,
        y: 205,
        mode: 'medium',
        visible: true,
      },
      {
        x: 125,
        y: 240,
        mode: 'medium',
        visible: true,
      },
      {
        x: 250,
        y: 238,
        mode: 'medium',
        visible: true,
      },
      {
        x: 445,
        y: 250,
        mode: 'medium',
        visible: true,
      },
      {
        x: 590,
        y: 230,
        mode: 'medium',
        visible: true,
      },
      {
        x: 560,
        y: 285,
        mode: 'medium',
        visible: true,
      },
      {
        x: 265,
        y: 325,
        mode: 'medium',
        visible: true,
      },
      {
        x: 425,
        y: 340,
        mode: 'medium',
        visible: true,
      },
      {
        x: 110,
        y: 410,
        mode: 'medium',
        visible: true,
      },
      {
        x: 350,
        y: 385,
        mode: 'medium',
        visible: true,
      },
      {
        x: 510,
        y: 375,
        mode: 'medium',
        visible: true,
      },
      {
        x: 440,
        y: 445,
        mode: 'medium',
        visible: true,
      },
      {
        x: 820,
        y: 475,
        mode: 'medium',
        visible: true,
      },
      {
        x: 75,
        y: 560,
        mode: 'medium',
        visible: true,
      },
      {
        x: 340,
        y: 590,
        mode: 'medium',
        visible: true,
      },
      {
        x: 556,
        y: 520,
        mode: 'medium',
        visible: true,
      }
    ],
    mode: 'medium',
  },
  [THydrogenCloudStepEnum.stage3]: {
    items: [
      {
        x: 245,
        y: 0,
        mode: 'medium',
        visible: true,
      },
      {
        x: 175,
        y: 32,
        mode: 'medium',
        visible: true,
      },
      {
        x: 235,
        y: 75,
        mode: 'medium',
        visible: true,
      },
      {
        x: 36,
        y: 74,
        mode: 'medium',
        visible: true,
      },
      {
        x: 117,
        y: 72,
        mode: 'medium',
        visible: true,
      },
      {
        x: 176,
        y: 105,
        mode: 'medium',
        visible: true,
      },
      {
        x: 315,
        y: 100,
        mode: 'medium',
        visible: true,
      },
      {
        x: 235,
        y: 135,
        mode: 'medium',
        visible: true,
      },
      {
        x: 170,
        y: 172,
        mode: 'medium',
        visible: true,
      },
      {
        x: 0,
        y: 150,
        mode: 'medium',
        visible: true,
      },
      {
        x: 70,
        y: 170,
        mode: 'medium',
        visible: true,
      },
      {
        x: 35,
        y: 250,
        mode: 'medium',
        visible: true,
      },
      {
        x: 120,
        y: 240,
        mode: 'medium',
        visible: true,
      },
      {
        x: 240,
        y: 240,
        mode: 'medium',
        visible: true,
      },
      {
        x: 330,
        y: 245,
        mode: 'medium',
        visible: true,
      },
      {
        x: 170,
        y: 295,
        mode: 'medium',
        visible: true,
      },
      {
        x: 90,
        y: 320,
        mode: 'medium',
        visible: true,
      },
      {
        x: 240,
        y: 320,
        mode: 'medium',
        visible: true,
      }
    ],
    mode: "medium"
  }
};
const positionsLength = Object.values(positions).reduce((currMax, { items: { length } }) => length > currMax ? length : currMax, 0);

export const HydrogenCloud = memo<THydrogenCloudProps>(({ mode }) => {
  return <div>
    {positions[mode].items.map(item => (
      <Hydrogen
        state={item.mode}
        left={item.x}
        top={item.y}
        visible={item.visible}
      />
    ))}
  </div>
});