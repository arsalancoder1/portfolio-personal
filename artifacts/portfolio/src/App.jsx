const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Portfolio from "@/pages/Portfolio";

const queryClient = new QueryClient();

function App() {
  return (
    _jsxDEV(QueryClientProvider, { client: queryClient, children: 
      _jsxDEV(TooltipProvider, { children: [
        _jsxDEV('div', { className: "dark min-h-screen bg-background text-foreground selection:bg-primary/30"    , children: 
          _jsxDEV(Portfolio, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 13}, this )
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 12}, this)
        , _jsxDEV(Toaster, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 15}, this )
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 11}, this)
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 10}, this)
  );
}

export default App;
