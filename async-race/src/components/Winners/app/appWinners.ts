import { mainButtons } from "../../Garage/mainButtons/mainButtons";
import { createFooter } from "../../Garage/createComponents/createFooter/createFooter";
import { getData } from "../../Winners/winnersApi/getData";
import { Winners } from "../../interfaces/types";
import { createWinners } from "../createComponents/createWinnersTable/createWinners";
import { renderWinners } from "../renderWinners/renderWinners";

export async function appWinners(): Promise<void> {
  const winners = await getData('http://127.0.0.1:3000/winners') as Winners[];
  mainButtons();
  if (typeof winners !== 'string') {
    renderWinners(winners);
  }
  createFooter();
}