import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { ClockArrowUp } from "lucide-react";

const ShipmentsCard: React.FC = () => {
  return (
    <Link to={"/seller/shipments"}>
        <Card className="h-[200px]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Seller</CardTitle>
              <ClockArrowUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
              <div className="text-2xl font-bold">Shipment History</div>
              <p className="text-xs text-muted-foreground">Track your shipment history here</p>
          </CardContent>
        </Card>
    </Link>
  );
};

export default ShipmentsCard;