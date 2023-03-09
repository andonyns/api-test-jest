import { doAuth, addUser } from './auth';

describe('auth', () => {
  it('should work', () => {
    expect(doAuth()).toMatchInlineSnapshot(`
      {
        "name": "Cheddar",
        "success": true,
      }
    `);
  });

  it('should mock saving', () => {
    const saveData = jest.fn();
    saveData.mockReturnValueOnce(200);

    expect(addUser("John")).toEqual(200);

  });
});
