import expect from 'expect';
import { questions } from '../Api/api';

describe('Test Questions from Api', () => {
  it('should get questions data', () => {
    const questionsData = questions(5);
    expect(questionsData.length).toEqual(5);
    expect(questionsData.length).toNotEqual(10);
  });

  it('should not get more than 10 questions data', () => {
    const questionsData = questions(50);
    expect(questionsData.length).toEqual(10);
    expect(questionsData.length).toNotEqual(50);
  });

  it('should return an object', () => {
    const questionsData = questions(5);
    expect(typeof questionsData).toBe('object');
  });
});
