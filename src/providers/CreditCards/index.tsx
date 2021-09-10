import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import api from "../../services/api";
import { useAuth } from "../../providers/Auth";
import jwt_decode from "jwt-decode";
import toast from "react-hot-toast";

interface User {
  number: string;
  card_holder: string;
  name: string;
  good_thru: string;
  verification_code: string;
}

interface Decoded {
  email: string;
  iat: number;
  exp: number;
  sub: string;
}

interface CreditCard {
  card_holder: string;
  good_thru: string;
  id: number;
  name: string;
  number: string;
  userId: number;
  verification_code: string;
}

interface CreditCardsProviderProps {
  children: ReactNode;
}

interface CreditCardsProviderData {
  creditCards: CreditCard[];
  addCreditCard: (data: User) => void;
}

const CreditCardsContext = createContext<CreditCardsProviderData>(
  {} as CreditCardsProviderData
);

export const CreditCardsProvider = ({ children }: CreditCardsProviderProps) => {
  const { token } = useAuth();
  const decoded: Decoded = jwt_decode(token);
  const userId = Number(decoded.sub);

  const [creditCards, setCreditCards] = useState<CreditCard[]>([]);

  useEffect(() => {
    api
      .get<CreditCard[]>(`/creditCards?userId=${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setCreditCards(response.data));
  }, []);

  const addCreditCard = (data: User) => {
    api
      .post(
        "/creditCards",
        { ...data, userId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        setCreditCards([...creditCards, response.data]);
        toast.success("Cartão adicionado com sucesso!");
      })
      .catch((_) => toast.error("Algo saiu mal. Tente novamente."));
  };

  return (
    <CreditCardsContext.Provider value={{ creditCards, addCreditCard }}>
      {children}
    </CreditCardsContext.Provider>
  );
};

export const useCreditCards = () => useContext(CreditCardsContext);
