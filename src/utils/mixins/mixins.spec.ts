import { computeAdaptiveValue } from '@utils/mixins/mixins';

const EPS = 0.1;

describe('mixins work correctly', () => {
  it('computeAdaptiveValue should work correctly', function () {
    const testData = [
      {
        input: {
          value: 10,
          container: 1024,
          minContainer: 600,
          windowWidth: 650,
        },
        result: 6.34765625,
      },
      {
        input: {
          value: 30,
          container: 1920,
          minContainer: 1440,
          windowWidth: 1800,
        },
        result: 28.125,
      },
      {
        input: {
          value: 30,
          container: 1920,
          minContainer: 1440,
          windowWidth: 1200,
        },
        result: 30,
      },
    ];

    testData.forEach((item) => {
      expect(
        Math.abs(computeAdaptiveValue(item.input) - item.result)
      ).toBeLessThanOrEqual(EPS);
    });
  });
});
