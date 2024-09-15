import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

interface Request {
  userData: User;
  receiptData: ReceiptData;
}

interface User {
  name: string;
  email: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  date: string;
}

interface Receipt {
  activityCategory: string;
  expenseCategory: string;
  itemsPurchasedDescription: string;
  cost: string;
  additionalInformation: string;
  id: string;
  uri: string;
}

interface ReceiptData {
  receipts: Receipt[];
}

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 10,
    fontSize: 12,
  },
  section: {
    marginBottom: 10,
    padding: 10,
  },
  table: {
    display: "flex",
    width: "auto",
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    flexDirection: "column",
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableColHeader: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#f3f3f3",
    textAlign: "center",
    padding: 5,
  },
  tableCol: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    padding: 5,
  },
  tableCellHeader: {
    fontSize: 10,
    fontWeight: "bold",
  },
  tableCell: {
    fontSize: 10,
  },
  textBold: {
    fontWeight: "bold",
  },
  textSmall: {
    fontSize: 10,
  },
  totalText: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: "bold",
    textDecoration: "underline",
  },
  receiptImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
});

const RequestDocument = ({ request }: { request: Request }) => {
  const grandTotal = Object.values(request.receiptData.receipts).reduce(
    (total, receipt) => {
      const cost = receipt.cost ? Number(receipt.cost) : 0;
      total += cost;
      return total;
    },
    0
  );

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Requester's Name:</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{request.userData.name}</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Email Address:</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{request.userData.email}</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Mailing Address:</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                {request.userData.streetAddress +
                  ", " +
                  request.userData.city +
                  ", " +
                  request.userData.state +
                  ", " +
                  request.userData.zipCode}
              </Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Date of Submission:</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{request.userData.date}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.textBold}>Purchase Detail</Text>
          <Text style={styles.textSmall}>
            (please submit receipts for all purchases)
          </Text>
        </View>

        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>
                Description of items purchased
              </Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>
                Name of Activity or Event
              </Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Expense Category</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Amount</Text>
            </View>
          </View>

          {Object.values(request.receiptData.receipts).map((receipt, i) => (
            <View style={styles.tableRow} key={i}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {receipt.itemsPurchasedDescription}
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{receipt.activityCategory}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{receipt.expenseCategory}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>${receipt.cost}</Text>
              </View>
            </View>
          ))}
        </View>

        <Text style={styles.totalText}>
          Total: ${Number(grandTotal).toFixed(2)}
        </Text>

        <View style={[styles.table, { marginTop: 20 }]}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Employee Initials:</Text>
            </View>
            <View style={styles.tableCol}></View>
            <View style={styles.tableCol}></View>
            <View style={styles.tableCol}></View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Supervisor Initials:</Text>
            </View>
            <View style={styles.tableCol}></View>
            <View style={styles.tableCol}></View>
            <View style={styles.tableCol}></View>
          </View>
        </View>
      </Page>
      {/**receipt */}
      {Object.values(request.receiptData.receipts).map((receipt, i) => (
        <Page size="A4">
          <Image src={receipt.uri} style={styles.receiptImage} />
        </Page>
      ))}
    </Document>
  );
};

export default RequestDocument;
