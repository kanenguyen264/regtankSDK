import { AxiosResponse } from "axios";
import { PPAuthContext as PPAuthContextBase } from "./src/core/ProtegoProvider/ProtegoProvider";
import AuthServiceBase from "./src/core/AuthService";
declare global {
  type PPAuthContext = PPAuthContextBase;
  type AuthService = AuthServiceBase;
}
declare module "@babel/types" {
  export function assertArrayExpression(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ArrayExpression;
  export function assertAssignmentExpression(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").AssignmentExpression;
  export function assertBinaryExpression(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").BinaryExpression;
  export function assertDirective(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").Directive;
  export function assertDirectiveLiteral(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").DirectiveLiteral;
  export function assertBlockStatement(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").BlockStatement;
  export function assertBreakStatement(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").BreakStatement;
  export function assertCallExpression(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").CallExpression;
  export function assertCatchClause(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").CatchClause;
  export function assertConditionalExpression(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ConditionalExpression;
  export function assertContinueStatement(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ContinueStatement;
  export function assertDebuggerStatement(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").DebuggerStatement;
  export function assertDoWhileStatement(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").DoWhileStatement;
  export function assertEmptyStatement(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").EmptyStatement;
  export function assertExpressionStatement(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ExpressionStatement;
  export function assertFile(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").File;
  export function assertForInStatement(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ForInStatement;
  export function assertForStatement(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ForStatement;
  export function assertFunctionDeclaration(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").FunctionDeclaration;
  export function assertFunctionExpression(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").FunctionExpression;
  export function assertIdentifier(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").Identifier;
  export function assertIfStatement(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").IfStatement;
  export function assertLabeledStatement(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").LabeledStatement;
  export function assertStringLiteral(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").StringLiteral;
  export function assertNumericLiteral(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").NumericLiteral;

  /** @deprecated Use `assertNumericLiteral` */
  export function assertNumberLiteral(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").NumericLiteral;
  export function assertNullLiteral(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").NullLiteral;
  export function assertBooleanLiteral(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").BooleanLiteral;
  export function assertRegExpLiteral(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").RegExpLiteral;

  /** @deprecated Use `assertRegExpLiteral` */
  export function assertRegexLiteral(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").RegExpLiteral;
  export function assertLogicalExpression(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").LogicalExpression;
  export function assertMemberExpression(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").MemberExpression;
  export function assertNewExpression(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").NewExpression;
  export function assertProgram(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").Program;
  export function assertObjectExpression(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ObjectExpression;
  export function assertObjectMethod(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ObjectMethod;
  export function assertObjectProperty(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ObjectProperty;
  export function assertRestElement(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").RestElement;
  export function assertReturnStatement(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ReturnStatement;
  export function assertSequenceExpression(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").SequenceExpression;
  export function assertSwitchCase(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").SwitchCase;
  export function assertSwitchStatement(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").SwitchStatement;
  export function assertThisExpression(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ThisExpression;
  export function assertThrowStatement(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ThrowStatement;
  export function assertTryStatement(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TryStatement;
  export function assertUnaryExpression(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").UnaryExpression;
  export function assertUpdateExpression(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").UpdateExpression;
  export function assertVariableDeclaration(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").VariableDeclaration;
  export function assertVariableDeclarator(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").VariableDeclarator;
  export function assertWhileStatement(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").WhileStatement;
  export function assertWithStatement(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").WithStatement;
  export function assertAssignmentPattern(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").AssignmentPattern;
  export function assertArrayPattern(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ArrayPattern;
  export function assertArrowFunctionExpression(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ArrowFunctionExpression;
  export function assertClassBody(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ClassBody;
  export function assertClassDeclaration(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ClassDeclaration;
  export function assertClassExpression(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ClassExpression;
  export function assertExportAllDeclaration(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ExportAllDeclaration;
  export function assertExportDefaultDeclaration(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ExportDefaultDeclaration;
  export function assertExportNamedDeclaration(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ExportNamedDeclaration;
  export function assertExportSpecifier(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ExportSpecifier;
  export function assertForOfStatement(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ForOfStatement;
  export function assertImportDeclaration(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ImportDeclaration;
  export function assertImportDefaultSpecifier(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ImportDefaultSpecifier;
  export function assertImportNamespaceSpecifier(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ImportNamespaceSpecifier;
  export function assertImportSpecifier(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ImportSpecifier;
  export function assertMetaProperty(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").MetaProperty;
  export function assertClassMethod(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ClassMethod;
  export function assertObjectPattern(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ObjectPattern;
  export function assertSpreadElement(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").SpreadElement;
  export function assertSuper(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").Super;
  export function assertTaggedTemplateExpression(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TaggedTemplateExpression;
  export function assertTemplateElement(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TemplateElement;
  export function assertTemplateLiteral(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TemplateLiteral;
  export function assertYieldExpression(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").YieldExpression;
  export function assertAnyTypeAnnotation(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").AnyTypeAnnotation;
  export function assertArrayTypeAnnotation(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ArrayTypeAnnotation;
  export function assertBooleanTypeAnnotation(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").BooleanTypeAnnotation;
  export function assertBooleanLiteralTypeAnnotation(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").BooleanLiteralTypeAnnotation;
  export function assertNullLiteralTypeAnnotation(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").NullLiteralTypeAnnotation;
  export function assertClassImplements(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ClassImplements;
  export function assertClassProperty(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ClassProperty;
  export function assertDeclareClass(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").DeclareClass;
  export function assertDeclareFunction(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").DeclareFunction;
  export function assertDeclareInterface(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").DeclareInterface;
  export function assertDeclareModule(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").DeclareModule;
  export function assertDeclareTypeAlias(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").DeclareTypeAlias;
  export function assertDeclareVariable(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").DeclareVariable;
  export function assertExistentialTypeParam(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ExistentialTypeParam;
  export function assertFunctionTypeAnnotation(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").FunctionTypeAnnotation;
  export function assertFunctionTypeParam(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").FunctionTypeParam;
  export function assertGenericTypeAnnotation(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").GenericTypeAnnotation;
  export function assertInterfaceExtends(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").InterfaceExtends;
  export function assertInterfaceDeclaration(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").InterfaceDeclaration;
  export function assertIntersectionTypeAnnotation(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").IntersectionTypeAnnotation;
  export function assertMixedTypeAnnotation(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").MixedTypeAnnotation;
  export function assertNullableTypeAnnotation(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").NullableTypeAnnotation;
  export function assertNumericLiteralTypeAnnotation(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").NumericLiteralTypeAnnotation;
  export function assertNumberTypeAnnotation(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").NumberTypeAnnotation;
  export function assertStringLiteralTypeAnnotation(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").StringLiteralTypeAnnotation;
  export function assertStringTypeAnnotation(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").StringTypeAnnotation;
  export function assertThisTypeAnnotation(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ThisTypeAnnotation;
  export function assertTupleTypeAnnotation(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TupleTypeAnnotation;
  export function assertTypeofTypeAnnotation(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TypeofTypeAnnotation;
  export function assertTypeAlias(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TypeAlias;
  export function assertTypeAnnotation(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TypeAnnotation;
  export function assertTypeCastExpression(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TypeCastExpression;
  export function assertTypeParameter(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TypeParameter;
  export function assertTypeParameterDeclaration(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TypeParameterDeclaration;
  export function assertTypeParameterInstantiation(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TypeParameterInstantiation;
  export function assertObjectTypeAnnotation(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ObjectTypeAnnotation;
  export function assertObjectTypeCallProperty(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ObjectTypeCallProperty;
  export function assertObjectTypeIndexer(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ObjectTypeIndexer;
  export function assertObjectTypeProperty(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ObjectTypeProperty;
  export function assertQualifiedTypeIdentifier(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").QualifiedTypeIdentifier;
  export function assertUnionTypeAnnotation(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").UnionTypeAnnotation;
  export function assertVoidTypeAnnotation(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").VoidTypeAnnotation;
  export function assertJSXAttribute(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").JSXAttribute;
  export function assertJSXClosingElement(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").JSXClosingElement;
  export function assertJSXElement(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").JSXElement;
  export function assertJSXEmptyExpression(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").JSXEmptyExpression;
  export function assertJSXExpressionContainer(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").JSXExpressionContainer;
  export function assertJSXIdentifier(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").JSXIdentifier;
  export function assertJSXMemberExpression(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").JSXMemberExpression;
  export function assertJSXNamespacedName(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").JSXNamespacedName;
  export function assertJSXOpeningElement(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").JSXOpeningElement;
  export function assertJSXSpreadAttribute(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").JSXSpreadAttribute;
  export function assertJSXText(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").JSXText;
  export function assertNoop(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").Noop;
  export function assertParenthesizedExpression(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ParenthesizedExpression;
  export function assertAwaitExpression(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").AwaitExpression;
  export function assertBindExpression(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").BindExpression;
  export function assertDecorator(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").Decorator;
  export function assertDoExpression(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").DoExpression;
  export function assertExportDefaultSpecifier(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ExportDefaultSpecifier;
  export function assertExportNamespaceSpecifier(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ExportNamespaceSpecifier;
  export function assertRestProperty(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").RestProperty;
  export function assertSpreadProperty(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").SpreadProperty;
  export function assertExpression(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").Expression;
  export function assertBinary(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").Binary;
  export function assertScopable(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").Scopable;
  export function assertBlockParent(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").BlockParent;
  export function assertBlock(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").Block;
  export function assertStatement(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").Statement;
  export function assertTerminatorless(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").Terminatorless;
  export function assertCompletionStatement(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").CompletionStatement;
  export function assertConditional(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").Conditional;
  export function assertLoop(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").Loop;
  export function assertWhile(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").While;
  export function assertExpressionWrapper(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ExpressionWrapper;
  export function assertFor(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").For;
  export function assertForXStatement(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ForXStatement;

  export function assertFunction(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").Function;
  export function assertFunctionParent(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").FunctionParent;
  export function assertPureish(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").Pureish;
  export function assertDeclaration(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").Declaration;
  export function assertLVal(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").LVal;
  export function assertLiteral(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").Literal;
  export function assertImmutable(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").Immutable;
  export function assertUserWhitespacable(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").UserWhitespacable;
  export function assertMethod(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").Method;
  export function assertObjectMember(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ObjectMember;
  export function assertProperty(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").Property;
  export function assertUnaryLike(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").UnaryLike;
  export function assertPattern(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").Pattern;
  export function assertClass(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").Class;
  export function assertModuleDeclaration(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ModuleDeclaration;
  export function assertExportDeclaration(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ExportDeclaration;
  export function assertModuleSpecifier(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").ModuleSpecifier;
  export function assertFlow(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").Flow;
  export function assertFlowBaseAnnotation(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").FlowBaseAnnotation;
  export function assertFlowDeclaration(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").FlowDeclaration;
  export function assertJSX(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").JSX;

  export function assertTSAnyKeyword(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSAnyKeyword;
  export function assertTSArrayType(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSArrayType;
  export function assertTSAsExpression(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSAsExpression;
  export function assertTSBooleanKeyword(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSBooleanKeyword;
  export function assertTSCallSignatureDeclaration(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSCallSignatureDeclaration;
  export function assertTSConstructSignatureDeclaration(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSConstructSignatureDeclaration;
  export function assertTSConstructorType(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSConstructorType;
  export function assertTSDeclareFunction(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSDeclareFunction;
  export function assertTSDeclareMethod(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSDeclareMethod;
  export function assertTSEnumDeclaration(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSEnumDeclaration;
  export function assertTSEnumMember(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSEnumMember;
  export function assertTSExportAssignment(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSExportAssignment;
  export function assertTSExpressionWithTypeArguments(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSExpressionWithTypeArguments;
  export function assertTSExternalModuleReference(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSExternalModuleReference;
  export function assertTSFunctionType(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSFunctionType;
  export function assertTSImportEqualsDeclaration(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSImportEqualsDeclaration;
  export function assertTSIndexSignature(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSIndexSignature;
  export function assertTSIndexedAccessType(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSIndexedAccessType;
  export function assertTSInterfaceBody(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSInterfaceBody;
  export function assertTSInterfaceDeclaration(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSInterfaceDeclaration;
  export function assertTSIntersectionType(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSIntersectionType;
  export function assertTSLiteralType(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSLiteralType;
  export function assertTSMappedType(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSMappedType;
  export function assertTSMethodSignature(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSMethodSignature;
  export function assertTSModuleBlock(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSModuleBlock;
  export function assertTSModuleDeclaration(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSModuleDeclaration;
  export function assertTSNamespaceExportDeclaration(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSNamespaceExportDeclaration;
  export function assertTSNeverKeyword(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSNeverKeyword;
  export function assertTSNonNullExpression(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSNonNullExpression;
  export function assertTSNullKeyword(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSNullKeyword;
  export function assertTSNumberKeyword(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSNumberKeyword;
  export function assertTSObjectKeyword(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSObjectKeyword;
  export function assertTSParameterProperty(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSParameterProperty;
  export function assertTSParenthesizedType(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSParenthesizedType;
  export function assertTSPropertySignature(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSPropertySignature;
  export function assertTSQualifiedName(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSQualifiedName;
  export function assertTSStringKeyword(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSStringKeyword;
  export function assertTSSymbolKeyword(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSSymbolKeyword;
  export function assertTSThisType(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSThisType;
  export function assertTSTupleType(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSTupleType;
  export function assertTSTypeAliasDeclaration(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSTypeAliasDeclaration;
  export function assertTSTypeAnnotation(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSTypeAnnotation;
  export function assertTSTypeAssertion(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSTypeAssertion;
  export function assertTSTypeLiteral(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSTypeLiteral;
  export function assertTSTypeOperator(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSTypeOperator;
  export function assertTSTypeParameter(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSTypeParameter;
  export function assertTSTypeParameterDeclaration(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSTypeParameterDeclaration;
  export function assertTSTypeParameterInstantiation(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSTypeParameterInstantiation;
  export function assertTSTypePredicate(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSTypePredicate;
  export function assertTSTypeQuery(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSTypeQuery;
  export function assertTSTypeReference(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSTypeReference;
  export function assertTSUndefinedKeyword(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSUndefinedKeyword;
  export function assertTSUnionType(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSUnionType;
  export function assertTSVoidKeyword(
    node: object | null | undefined,
    opts?: object
  ): asserts node is import("./node_modules/@types/babel-types/ts3.6/index").TSVoidKeyword;
}
//@ts-ignore
declare module "@babel/traverse" {
  // Type definitions for babel-traverse 6.25
  // Project: https://github.com/babel/babel/tree/master/packages/babel-traverse, https://babeljs.io
  // Definitions by: Troy Gerwien <https://github.com/yortus>
  //                 Marvin Hagemeister <https://github.com/marvinhagemeister>
  //                 Ryan Petrich <https://github.com/rpetrich>
  // Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
  // TypeScript Version: 2.8

  import * as t from "@babel/types";
  export type Node = t.Node;

  export default function traverse<S = Node>(
    parent: Node | Node[],
    opts: TraverseOptions<S>,
    scope: Scope,
    state: S,
    parentPath?: NodePath
  ): void;

  export interface TraverseOptions<S = Node> extends Visitor<S> {
    scope?: Scope;
    noScope?: boolean;
  }

  export interface TraverseDeclaration<S = Node> {
    name?: string;
    visitor: TraverseOptions<S>;
  }

  export class Scope {
    constructor(path: NodePath, parentScope?: Scope);
    path: NodePath;
    block: Node;
    parentBlock: Node;
    parent: Scope;
    hub: Hub;
    bindings: { [name: string]: Binding };

    /** Traverse node with current scope and path. */
    traverse<S>(node: Node | Node[], opts: TraverseOptions<S>, state: S): void;
    traverse(node: Node | Node[], opts?: TraverseOptions, state?: any): void;

    /** Generate a unique identifier and add it to the current scope. */
    generateDeclaredUidIdentifier(name?: string): t.Identifier;

    /** Generate a unique identifier. */
    generateUidIdentifier(name?: string): t.Identifier;

    /** Generate a unique `_id1` binding. */
    generateUid(name?: string): string;

    /** Generate a unique identifier based on a node. */
    generateUidIdentifierBasedOnNode(
      parent: Node,
      defaultName?: string
    ): t.Identifier;

    /**
     * Determine whether evaluating the specific input `node` is a consequenceless reference. ie.
     * evaluating it wont result in potentially arbitrary code from being ran. The following are
     * whitelisted and determined not to cause side effects:
     *
     *  - `this` expressions
     *  - `super` expressions
     *  - Bound identifiers
     */
    isStatic(node: Node): boolean;

    /** Possibly generate a memoised identifier if it is not static and has consequences. */
    maybeGenerateMemoised(node: Node, dontPush?: boolean): t.Identifier;

    checkBlockScopedCollisions(
      local: Node,
      kind: string,
      name: string,
      id: object
    ): void;

    rename(oldName: string, newName?: string, block?: Node): void;

    dump(): void;

    toArray(node: Node, i?: number): Node;

    registerDeclaration(path: NodePath): void;

    buildUndefinedNode(): Node;

    registerConstantViolation(path: NodePath): void;

    registerBinding(kind: string, path: NodePath, bindingPath?: NodePath): void;

    addGlobal(node: Node): void;

    hasUid(name: string): boolean;

    hasGlobal(name: string): boolean;

    hasReference(name: string): boolean;

    isPure(node: Node, constantsOnly?: boolean): boolean;

    setData(key: string, val: any): any;

    getData(key: string): any;

    removeData(key: string): void;

    push(opts: any): void;

    getProgramParent(): Scope;

    getFunctionParent(): Scope;

    getBlockParent(): Scope;

    /** Walks the scope tree and gathers **all** bindings. */
    getAllBindings(...kinds: string[]): object;

    bindingIdentifierEquals(name: string, node: Node): boolean;

    getBinding(name: string): Binding | undefined;

    getOwnBinding(name: string): Binding | undefined;

    getBindingIdentifier(name: string): t.Identifier;

    getOwnBindingIdentifier(name: string): t.Identifier;

    hasOwnBinding(name: string): boolean;

    hasBinding(name: string, noGlobals?: boolean): boolean;

    parentHasBinding(name: string, noGlobals?: boolean): boolean;

    /** Move a binding of `name` to another `scope`. */
    moveBindingTo(name: string, scope: Scope): void;

    removeOwnBinding(name: string): void;

    removeBinding(name: string): void;
  }

  export class Binding {
    constructor(opts: {
      existing: Binding;
      identifier: t.Identifier;
      scope: Scope;
      path: NodePath;
      kind: "var" | "let" | "const";
    });
    identifier: t.Identifier;
    scope: Scope;
    path: NodePath;
    kind: "var" | "let" | "const" | "module";
    referenced: boolean;
    references: number;
    referencePaths: NodePath[];
    constant: boolean;
    constantViolations: NodePath[];
  }

  // The Visitor has to be generic because babel binds `this` for each property.
  // `this` is usually used in babel plugins to pass plugin state from
  // `pre` -> `visitor` -> `post`. An example of this can be seen in the official
  // babel handbook:
  // https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md#-pre-and-post-in-plugins
  export interface Visitor<S = Node> extends VisitNodeObject<Node> {
    ArrayExpression?: VisitNode<S, t.ArrayExpression>;
    AssignmentExpression?: VisitNode<S, t.AssignmentExpression>;
    LVal?: VisitNode<S, t.LVal>;
    Expression?: VisitNode<S, t.Expression>;
    BinaryExpression?: VisitNode<S, t.BinaryExpression>;
    Directive?: VisitNode<S, t.Directive>;
    DirectiveLiteral?: VisitNode<S, t.DirectiveLiteral>;
    BlockStatement?: VisitNode<S, t.BlockStatement>;
    BreakStatement?: VisitNode<S, t.BreakStatement>;
    Identifier?: VisitNode<S, t.Identifier>;
    CallExpression?: VisitNode<S, t.CallExpression>;
    CatchClause?: VisitNode<S, t.CatchClause>;
    ConditionalExpression?: VisitNode<S, t.ConditionalExpression>;
    ContinueStatement?: VisitNode<S, t.ContinueStatement>;
    DebuggerStatement?: VisitNode<S, t.DebuggerStatement>;
    DoWhileStatement?: VisitNode<S, t.DoWhileStatement>;
    Statement?: VisitNode<S, t.Statement>;
    EmptyStatement?: VisitNode<S, t.EmptyStatement>;
    ExpressionStatement?: VisitNode<S, t.ExpressionStatement>;
    File?: VisitNode<S, t.File>;
    Program?: VisitNode<S, t.Program>;
    ForInStatement?: VisitNode<S, t.ForInStatement>;
    VariableDeclaration?: VisitNode<S, t.VariableDeclaration>;
    ForStatement?: VisitNode<S, t.ForStatement>;
    FunctionDeclaration?: VisitNode<S, t.FunctionDeclaration>;
    FunctionExpression?: VisitNode<S, t.FunctionExpression>;
    IfStatement?: VisitNode<S, t.IfStatement>;
    LabeledStatement?: VisitNode<S, t.LabeledStatement>;
    StringLiteral?: VisitNode<S, t.StringLiteral>;
    NumericLiteral?: VisitNode<S, t.NumericLiteral>;
    NullLiteral?: VisitNode<S, t.NullLiteral>;
    BooleanLiteral?: VisitNode<S, t.BooleanLiteral>;
    RegExpLiteral?: VisitNode<S, t.RegExpLiteral>;
    LogicalExpression?: VisitNode<S, t.LogicalExpression>;
    MemberExpression?: VisitNode<S, t.MemberExpression>;
    NewExpression?: VisitNode<S, t.NewExpression>;
    ObjectExpression?: VisitNode<S, t.ObjectExpression>;
    ObjectMethod?: VisitNode<S, t.ObjectMethod>;
    ObjectProperty?: VisitNode<S, t.ObjectProperty>;
    RestElement?: VisitNode<S, t.RestElement>;
    ReturnStatement?: VisitNode<S, t.ReturnStatement>;
    SequenceExpression?: VisitNode<S, t.SequenceExpression>;
    SwitchCase?: VisitNode<S, t.SwitchCase>;
    SwitchStatement?: VisitNode<S, t.SwitchStatement>;
    ThisExpression?: VisitNode<S, t.ThisExpression>;
    ThrowStatement?: VisitNode<S, t.ThrowStatement>;
    TryStatement?: VisitNode<S, t.TryStatement>;
    UnaryExpression?: VisitNode<S, t.UnaryExpression>;
    UpdateExpression?: VisitNode<S, t.UpdateExpression>;
    VariableDeclarator?: VisitNode<S, t.VariableDeclarator>;
    WhileStatement?: VisitNode<S, t.WhileStatement>;
    WithStatement?: VisitNode<S, t.WithStatement>;
    AssignmentPattern?: VisitNode<S, t.AssignmentPattern>;
    ArrayPattern?: VisitNode<S, t.ArrayPattern>;
    ArrowFunctionExpression?: VisitNode<S, t.ArrowFunctionExpression>;
    ClassBody?: VisitNode<S, t.ClassBody>;
    ClassDeclaration?: VisitNode<S, t.ClassDeclaration>;
    ClassExpression?: VisitNode<S, t.ClassExpression>;
    ExportAllDeclaration?: VisitNode<S, t.ExportAllDeclaration>;
    ExportDefaultDeclaration?: VisitNode<S, t.ExportDefaultDeclaration>;
    ExportNamedDeclaration?: VisitNode<S, t.ExportNamedDeclaration>;
    Declaration?: VisitNode<S, t.Declaration>;
    ExportSpecifier?: VisitNode<S, t.ExportSpecifier>;
    ForOfStatement?: VisitNode<S, t.ForOfStatement>;
    ImportDeclaration?: VisitNode<S, t.ImportDeclaration>;
    ImportDefaultSpecifier?: VisitNode<S, t.ImportDefaultSpecifier>;
    ImportNamespaceSpecifier?: VisitNode<S, t.ImportNamespaceSpecifier>;
    ImportSpecifier?: VisitNode<S, t.ImportSpecifier>;
    MetaProperty?: VisitNode<S, t.MetaProperty>;
    ClassMethod?: VisitNode<S, t.ClassMethod>;
    ObjectPattern?: VisitNode<S, t.ObjectPattern>;
    SpreadElement?: VisitNode<S, t.SpreadElement>;
    Super?: VisitNode<S, t.Super>;
    TaggedTemplateExpression?: VisitNode<S, t.TaggedTemplateExpression>;
    TemplateLiteral?: VisitNode<S, t.TemplateLiteral>;
    TemplateElement?: VisitNode<S, t.TemplateElement>;
    YieldExpression?: VisitNode<S, t.YieldExpression>;
    AnyTypeAnnotation?: VisitNode<S, t.AnyTypeAnnotation>;
    ArrayTypeAnnotation?: VisitNode<S, t.ArrayTypeAnnotation>;
    BooleanTypeAnnotation?: VisitNode<S, t.BooleanTypeAnnotation>;
    BooleanLiteralTypeAnnotation?: VisitNode<S, t.BooleanLiteralTypeAnnotation>;
    NullLiteralTypeAnnotation?: VisitNode<S, t.NullLiteralTypeAnnotation>;
    ClassImplements?: VisitNode<S, t.ClassImplements>;
    ClassProperty?: VisitNode<S, t.ClassProperty>;
    DeclareClass?: VisitNode<S, t.DeclareClass>;
    DeclareFunction?: VisitNode<S, t.DeclareFunction>;
    DeclareInterface?: VisitNode<S, t.DeclareInterface>;
    DeclareModule?: VisitNode<S, t.DeclareModule>;
    DeclareTypeAlias?: VisitNode<S, t.DeclareTypeAlias>;
    DeclareVariable?: VisitNode<S, t.DeclareVariable>;
    // ExistentialTypeParam?: VisitNode<S, t.ExistentialTypeParam>;
    FunctionTypeAnnotation?: VisitNode<S, t.FunctionTypeAnnotation>;
    FunctionTypeParam?: VisitNode<S, t.FunctionTypeParam>;
    GenericTypeAnnotation?: VisitNode<S, t.GenericTypeAnnotation>;
    InterfaceExtends?: VisitNode<S, t.InterfaceExtends>;
    InterfaceDeclaration?: VisitNode<S, t.InterfaceDeclaration>;
    IntersectionTypeAnnotation?: VisitNode<S, t.IntersectionTypeAnnotation>;
    MixedTypeAnnotation?: VisitNode<S, t.MixedTypeAnnotation>;
    NullableTypeAnnotation?: VisitNode<S, t.NullableTypeAnnotation>;
    // NumericLiteralTypeAnnotation?: VisitNode<S, t.NumericLiteralTypeAnnotation>;
    NumberTypeAnnotation?: VisitNode<S, t.NumberTypeAnnotation>;
    StringLiteralTypeAnnotation?: VisitNode<S, t.StringLiteralTypeAnnotation>;
    StringTypeAnnotation?: VisitNode<S, t.StringTypeAnnotation>;
    ThisTypeAnnotation?: VisitNode<S, t.ThisTypeAnnotation>;
    TupleTypeAnnotation?: VisitNode<S, t.TupleTypeAnnotation>;
    TypeofTypeAnnotation?: VisitNode<S, t.TypeofTypeAnnotation>;
    TypeAlias?: VisitNode<S, t.TypeAlias>;
    TypeAnnotation?: VisitNode<S, t.TypeAnnotation>;
    TypeCastExpression?: VisitNode<S, t.TypeCastExpression>;
    TypeParameterDeclaration?: VisitNode<S, t.TypeParameterDeclaration>;
    TypeParameterInstantiation?: VisitNode<S, t.TypeParameterInstantiation>;
    ObjectTypeAnnotation?: VisitNode<S, t.ObjectTypeAnnotation>;
    ObjectTypeCallProperty?: VisitNode<S, t.ObjectTypeCallProperty>;
    ObjectTypeIndexer?: VisitNode<S, t.ObjectTypeIndexer>;
    ObjectTypeProperty?: VisitNode<S, t.ObjectTypeProperty>;
    QualifiedTypeIdentifier?: VisitNode<S, t.QualifiedTypeIdentifier>;
    UnionTypeAnnotation?: VisitNode<S, t.UnionTypeAnnotation>;
    VoidTypeAnnotation?: VisitNode<S, t.VoidTypeAnnotation>;
    JSXAttribute?: VisitNode<S, t.JSXAttribute>;
    JSXIdentifier?: VisitNode<S, t.JSXIdentifier>;
    JSXNamespacedName?: VisitNode<S, t.JSXNamespacedName>;
    JSXElement?: VisitNode<S, t.JSXElement>;
    JSXExpressionContainer?: VisitNode<S, t.JSXExpressionContainer>;
    JSXClosingElement?: VisitNode<S, t.JSXClosingElement>;
    JSXMemberExpression?: VisitNode<S, t.JSXMemberExpression>;
    JSXOpeningElement?: VisitNode<S, t.JSXOpeningElement>;
    JSXEmptyExpression?: VisitNode<S, t.JSXEmptyExpression>;
    JSXSpreadAttribute?: VisitNode<S, t.JSXSpreadAttribute>;
    JSXText?: VisitNode<S, t.JSXText>;
    Noop?: VisitNode<S, t.Noop>;
    ParenthesizedExpression?: VisitNode<S, t.ParenthesizedExpression>;
    AwaitExpression?: VisitNode<S, t.AwaitExpression>;
    BindExpression?: VisitNode<S, t.BindExpression>;
    Decorator?: VisitNode<S, t.Decorator>;
    DoExpression?: VisitNode<S, t.DoExpression>;
    ExportDefaultSpecifier?: VisitNode<S, t.ExportDefaultSpecifier>;
    ExportNamespaceSpecifier?: VisitNode<S, t.ExportNamespaceSpecifier>;
    RestProperty?: VisitNode<S, t.RestProperty>;
    SpreadProperty?: VisitNode<S, t.SpreadProperty>;
    Binary?: VisitNode<S, t.Binary>;
    Scopable?: VisitNode<S, t.Scopable>;
    BlockParent?: VisitNode<S, t.BlockParent>;
    Block?: VisitNode<S, t.Block>;
    Terminatorless?: VisitNode<S, t.Terminatorless>;
    CompletionStatement?: VisitNode<S, t.CompletionStatement>;
    Conditional?: VisitNode<S, t.Conditional>;
    Loop?: VisitNode<S, t.Loop>;
    While?: VisitNode<S, t.While>;
    ExpressionWrapper?: VisitNode<S, t.ExpressionWrapper>;
    For?: VisitNode<S, t.For>;
    ForXStatement?: VisitNode<S, t.ForXStatement>;
    Function?: VisitNode<S, t.Function>;
    FunctionParent?: VisitNode<S, t.FunctionParent>;
    Pureish?: VisitNode<S, t.Pureish>;
    Literal?: VisitNode<S, t.Literal>;
    Immutable?: VisitNode<S, t.Immutable>;
    UserWhitespacable?: VisitNode<S, t.UserWhitespacable>;
    Method?: VisitNode<S, t.Method>;
    ObjectMember?: VisitNode<S, t.ObjectMember>;
    Property?: VisitNode<S, t.Property>;
    UnaryLike?: VisitNode<S, t.UnaryLike>;
    Pattern?: VisitNode<S, t.Pattern>;
    Class?: VisitNode<S, t.Class>;
    ModuleDeclaration?: VisitNode<S, t.ModuleDeclaration>;
    ExportDeclaration?: VisitNode<S, t.ExportDeclaration>;
    ModuleSpecifier?: VisitNode<S, t.ModuleSpecifier>;
    Flow?: VisitNode<S, t.Flow>;
    FlowBaseAnnotation?: VisitNode<S, t.FlowBaseAnnotation>;
    FlowDeclaration?: VisitNode<S, t.FlowDeclaration>;
    JSX?: VisitNode<S, t.JSX>;
    Scope?: VisitNode<S, t.Scopable>;
  }

  export type VisitNode<T, P> = VisitNodeFunction<T, P> | VisitNodeObject<T>;

  export type VisitNodeFunction<T, P> = (
    this: T,
    path: NodePath<P>,
    state: any
  ) => void;

  export interface VisitNodeObject<T> {
    enter?(path: NodePath<T>, state: any): void;
    exit?(path: NodePath<T>, state: any): void;
  }

  export class NodePath<T = Node> {
    constructor(hub: Hub, parent: Node);
    parent: Node;
    hub: Hub;
    contexts: TraversalContext[];
    data: object;
    shouldSkip: boolean;
    shouldStop: boolean;
    removed: boolean;
    state: any;
    opts: object;
    skipKeys: object;
    parentPath: NodePath;
    context: TraversalContext;
    container: object | object[];
    listKey: string;
    inList: boolean;
    parentKey: string;
    key: string | number;
    node: T;
    scope: Scope;
    type: T extends undefined | null ? string | null : string;
    typeAnnotation: object;

    getScope(scope: Scope): Scope;

    setData(key: string, val: any): any;

    getData(key: string, def?: any): any;

    buildCodeFrameError<TError extends Error>(
      msg: string,
      Error?: new (msg: string) => TError
    ): TError;

    traverse<T>(visitor: Visitor<T>, state: T): void;
    traverse(visitor: Visitor): void;

    set(key: string, node: Node): void;

    getPathLocation(): string;

    // Example: https://github.com/babel/babel/blob/63204ae51e020d84a5b246312f5eeb4d981ab952/packages/babel-traverse/src/path/modification.js#L83
    debug(buildMessage: () => string): void;

    // ------------------------- ancestry -------------------------
    /**
     * Call the provided `callback` with the `NodePath`s of all the parents.
     * When the `callback` returns a truthy value, we return that node path.
     */
    findParent(callback: (path: NodePath) => boolean): NodePath;

    find(callback: (path: NodePath) => boolean): NodePath;

    /** Get the parent function of the current path. */
    getFunctionParent(): NodePath<t.Function>;

    /** Walk up the tree until we hit a parent node path in a list. */
    getStatementParent(): NodePath<t.Statement>;

    /**
     * Get the deepest common ancestor and then from it, get the earliest relationship path
     * to that ancestor.
     *
     * Earliest is defined as being "before" all the other nodes in terms of list container
     * position and visiting key.
     */
    getEarliestCommonAncestorFrom(paths: NodePath[]): NodePath[];

    /** Get the earliest path in the tree where the provided `paths` intersect. */
    getDeepestCommonAncestorFrom(
      paths: NodePath[],
      filter?: (deepest: Node, i: number, ancestries: NodePath[]) => NodePath
    ): NodePath;

    /**
     * Build an array of node paths containing the entire ancestry of the current node path.
     *
     * NOTE: The current node path is included in this.
     */
    getAncestry(): NodePath[];

    inType(...candidateTypes: string[]): boolean;

    // ------------------------- inference -------------------------
    /** Infer the type of the current `NodePath`. */
    // getTypeAnnotation(): t.FlowTypeAnnotation;

    isBaseType(baseName: string, soft?: boolean): boolean;

    couldBeBaseType(name: string): boolean;

    baseTypeStrictlyMatches(right: NodePath): boolean;

    isGenericType(genericName: string): boolean;

    // ------------------------- replacement -------------------------
    /**
     * Replace a node with an array of multiple. This method performs the following steps:
     *
     *  - Inherit the comments of first provided node with that of the current node.
     *  - Insert the provided nodes after the current node.
     *  - Remove the current node.
     */
    replaceWithMultiple(nodes: Node[]): void;

    /**
     * Parse a string as an expression and replace the current node with the result.
     *
     * NOTE: This is typically not a good idea to use. Building source strings when
     * transforming ASTs is an antipattern and SHOULD NOT be encouraged. Even if it's
     * easier to use, your transforms will be extremely brittle.
     */
    replaceWithSourceString(replacement: any): void;

    /** Replace the current node with another. */
    replaceWith(replacement: Node | NodePath): void;

    /**
     * This method takes an array of statements nodes and then explodes it
     * into expressions. This method retains completion records which is
     * extremely important to retain original semantics.
     */
    replaceExpressionWithStatements(nodes: Node[]): Node;

    replaceInline(nodes: Node | Node[]): void;

    // ------------------------- evaluation -------------------------
    /**
     * Walk the input `node` and statically evaluate if it's truthy.
     *
     * Returning `true` when we're sure that the expression will evaluate to a
     * truthy value, `false` if we're sure that it will evaluate to a falsy
     * value and `undefined` if we aren't sure. Because of this please do not
     * rely on coercion when using this method and check with === if it's false.
     */
    evaluateTruthy(): boolean;

    /**
     * Walk the input `node` and statically evaluate it.
     *
     * Returns an object in the form `{ confident, value }`. `confident` indicates
     * whether or not we had to drop out of evaluating the expression because of
     * hitting an unknown node that we couldn't confidently find the value of.
     *
     * Example:
     *
     *   t.evaluate(parse("5 + 5")) // { confident: true, value: 10 }
     *   t.evaluate(parse("!true")) // { confident: true, value: false }
     *   t.evaluate(parse("foo + foo")) // { confident: false, value: undefined }
     */
    evaluate(): { confident: boolean; value: any };

    // ------------------------- introspection -------------------------
    /**
     * Match the current node if it matches the provided `pattern`.
     *
     * For example, given the match `React.createClass` it would match the
     * parsed nodes of `React.createClass` and `React["createClass"]`.
     */
    matchesPattern(pattern: string, allowPartial?: boolean): boolean;

    /**
     * Check whether we have the input `key`. If the `key` references an array then we check
     * if the array has any items, otherwise we just check if it's falsy.
     */
    has(key: string): boolean;

    isStatic(): boolean;

    /** Alias of `has`. */
    is(key: string): boolean;

    /** Opposite of `has`. */
    isnt(key: string): boolean;

    /** Check whether the path node `key` strict equals `value`. */
    equals(key: string, value: any): boolean;

    /**
     * Check the type against our stored internal type of the node. This is handy when a node has
     * been removed yet we still internally know the type and need it to calculate node replacement.
     */
    isNodeType(type: string): boolean;

    /**
     * This checks whether or not we're in one of the following positions:
     *
     *   for (KEY in right);
     *   for (KEY;;);
     *
     * This is because these spots allow VariableDeclarations AND normal expressions so we need
     * to tell the path replacement that it's ok to replace this with an expression.
     */
    canHaveVariableDeclarationOrExpression(): boolean;

    /**
     * This checks whether we are swapping an arrow function's body between an
     * expression and a block statement (or vice versa).
     *
     * This is because arrow functions may implicitly return an expression, which
     * is the same as containing a block statement.
     */
    canSwapBetweenExpressionAndStatement(replacement: Node): boolean;

    /** Check whether the current path references a completion record */
    isCompletionRecord(allowInsideFunction?: boolean): boolean;

    /**
     * Check whether or not the current `key` allows either a single statement or block statement
     * so we can explode it if necessary.
     */
    isStatementOrBlock(): boolean;

    /** Check if the currently assigned path references the `importName` of `moduleSource`. */
    referencesImport(moduleSource: string, importName: string): boolean;

    /** Get the source code associated with this node. */
    getSource(): string;

    /** Check if the current path will maybe execute before another path */
    willIMaybeExecuteBefore(path: NodePath): boolean;

    // ------------------------- context -------------------------
    call(key: string): boolean;

    isBlacklisted(): boolean;

    visit(): boolean;

    skip(): void;

    skipKey(key: string): void;

    stop(): void;

    setScope(): void;

    setContext(context: TraversalContext): NodePath<T>;

    popContext(): void;

    pushContext(context: TraversalContext): void;

    // ------------------------- removal -------------------------
    remove(): void;

    // ------------------------- modification -------------------------
    /** Insert the provided nodes before the current one. */
    insertBefore(nodes: Node | Node[]): any;

    /**
     * Insert the provided nodes after the current one. When inserting nodes after an
     * expression, ensure that the completion record is correct by pushing the current node.
     */
    insertAfter(nodes: Node | Node[]): any;

    /** Update all sibling node paths after `fromIndex` by `incrementBy`. */
    updateSiblingKeys(fromIndex: number, incrementBy: number): void;

    /** Hoist the current node to the highest scope possible and return a UID referencing it. */
    hoist(scope: Scope): void;

    // ------------------------- family -------------------------
    getOpposite(): NodePath;

    getCompletionRecords(): NodePath[];

    getSibling(key: string | number): NodePath;
    getAllPrevSiblings(): NodePath[];
    getAllNextSiblings(): NodePath[];

    get<K extends keyof T>(
      key: K,
      context?: boolean | TraversalContext
    ): T[K] extends Array<Node | null | undefined>
      ? Array<NodePath<T[K][number]>>
      : T[K] extends Node | null | undefined
      ? NodePath<T[K]>
      : never;
    get(
      key: string,
      context?: boolean | TraversalContext
    ): NodePath | NodePath[];

    getBindingIdentifiers(duplicates?: boolean): Node[];

    getOuterBindingIdentifiers(duplicates?: boolean): Node[];

    // ------------------------- comments -------------------------
    /** Share comments amongst siblings. */
    shareCommentsWithSiblings(): void;

    addComment(type: string, content: string, line?: boolean): void;

    /** Give node `comments` of the specified `type`. */
    addComments(type: string, comments: any[]): void;

    // ------------------------- isXXX -------------------------
    isArrayExpression(opts?: object): this is NodePath<t.ArrayExpression>;
    isAssignmentExpression(
      opts?: object
    ): this is NodePath<t.AssignmentExpression>;
    isBinaryExpression(opts?: object): this is NodePath<t.BinaryExpression>;
    isDirective(opts?: object): this is NodePath<t.Directive>;
    isDirectiveLiteral(opts?: object): this is NodePath<t.DirectiveLiteral>;
    isBlockStatement(opts?: object): this is NodePath<t.BlockStatement>;
    isBreakStatement(opts?: object): this is NodePath<t.BreakStatement>;
    isCallExpression(opts?: object): this is NodePath<t.CallExpression>;
    isCatchClause(opts?: object): this is NodePath<t.CatchClause>;
    isConditionalExpression(
      opts?: object
    ): this is NodePath<t.ConditionalExpression>;
    isContinueStatement(opts?: object): this is NodePath<t.ContinueStatement>;
    isDebuggerStatement(opts?: object): this is NodePath<t.DebuggerStatement>;
    isDoWhileStatement(opts?: object): this is NodePath<t.DoWhileStatement>;
    isEmptyStatement(opts?: object): this is NodePath<t.EmptyStatement>;
    isExpressionStatement(
      opts?: object
    ): this is NodePath<t.ExpressionStatement>;
    isFile(opts?: object): this is NodePath<t.File>;
    isForInStatement(opts?: object): this is NodePath<t.ForInStatement>;
    isForStatement(opts?: object): this is NodePath<t.ForStatement>;
    isFunctionDeclaration(
      opts?: object
    ): this is NodePath<t.FunctionDeclaration>;
    isFunctionExpression(opts?: object): this is NodePath<t.FunctionExpression>;
    isIdentifier(opts?: object): this is NodePath<t.Identifier>;
    isIfStatement(opts?: object): this is NodePath<t.IfStatement>;
    isLabeledStatement(opts?: object): this is NodePath<t.LabeledStatement>;
    isStringLiteral(opts?: object): this is NodePath<t.StringLiteral>;
    isNumericLiteral(opts?: object): this is NodePath<t.NumericLiteral>;
    isNullLiteral(opts?: object): this is NodePath<t.NullLiteral>;
    isBooleanLiteral(opts?: object): this is NodePath<t.BooleanLiteral>;
    isRegExpLiteral(opts?: object): this is NodePath<t.RegExpLiteral>;
    isLogicalExpression(opts?: object): this is NodePath<t.LogicalExpression>;
    isMemberExpression(opts?: object): this is NodePath<t.MemberExpression>;
    isNewExpression(opts?: object): this is NodePath<t.NewExpression>;
    isProgram(opts?: object): this is NodePath<t.Program>;
    isObjectExpression(opts?: object): this is NodePath<t.ObjectExpression>;
    isObjectMethod(opts?: object): this is NodePath<t.ObjectMethod>;
    isObjectProperty(opts?: object): this is NodePath<t.ObjectProperty>;
    isRestElement(opts?: object): this is NodePath<t.RestElement>;
    isReturnStatement(opts?: object): this is NodePath<t.ReturnStatement>;
    isSequenceExpression(opts?: object): this is NodePath<t.SequenceExpression>;
    isSwitchCase(opts?: object): this is NodePath<t.SwitchCase>;
    isSwitchStatement(opts?: object): this is NodePath<t.SwitchStatement>;
    isThisExpression(opts?: object): this is NodePath<t.ThisExpression>;
    isThrowStatement(opts?: object): this is NodePath<t.ThrowStatement>;
    isTryStatement(opts?: object): this is NodePath<t.TryStatement>;
    isUnaryExpression(opts?: object): this is NodePath<t.UnaryExpression>;
    isUpdateExpression(opts?: object): this is NodePath<t.UpdateExpression>;
    isVariableDeclaration(
      opts?: object
    ): this is NodePath<t.VariableDeclaration>;
    isVariableDeclarator(opts?: object): this is NodePath<t.VariableDeclarator>;
    isWhileStatement(opts?: object): this is NodePath<t.WhileStatement>;
    isWithStatement(opts?: object): this is NodePath<t.WithStatement>;
    isAssignmentPattern(opts?: object): this is NodePath<t.AssignmentPattern>;
    isArrayPattern(opts?: object): this is NodePath<t.ArrayPattern>;
    isArrowFunctionExpression(
      opts?: object
    ): this is NodePath<t.ArrowFunctionExpression>;
    isClassBody(opts?: object): this is NodePath<t.ClassBody>;
    isClassDeclaration(opts?: object): this is NodePath<t.ClassDeclaration>;
    isClassExpression(opts?: object): this is NodePath<t.ClassExpression>;
    isExportAllDeclaration(
      opts?: object
    ): this is NodePath<t.ExportAllDeclaration>;
    isExportDefaultDeclaration(
      opts?: object
    ): this is NodePath<t.ExportDefaultDeclaration>;
    isExportNamedDeclaration(
      opts?: object
    ): this is NodePath<t.ExportNamedDeclaration>;
    isExportSpecifier(opts?: object): this is NodePath<t.ExportSpecifier>;
    isForOfStatement(opts?: object): this is NodePath<t.ForOfStatement>;
    isImportDeclaration(opts?: object): this is NodePath<t.ImportDeclaration>;
    isImportDefaultSpecifier(
      opts?: object
    ): this is NodePath<t.ImportDefaultSpecifier>;
    isImportNamespaceSpecifier(
      opts?: object
    ): this is NodePath<t.ImportNamespaceSpecifier>;
    isImportSpecifier(opts?: object): this is NodePath<t.ImportSpecifier>;
    isMetaProperty(opts?: object): this is NodePath<t.MetaProperty>;
    isClassMethod(opts?: object): this is NodePath<t.ClassMethod>;
    isObjectPattern(opts?: object): this is NodePath<t.ObjectPattern>;
    isSpreadElement(opts?: object): this is NodePath<t.SpreadElement>;
    isSuper(opts?: object): this is NodePath<t.Super>;
    isTaggedTemplateExpression(
      opts?: object
    ): this is NodePath<t.TaggedTemplateExpression>;
    isTemplateElement(opts?: object): this is NodePath<t.TemplateElement>;
    isTemplateLiteral(opts?: object): this is NodePath<t.TemplateLiteral>;
    isYieldExpression(opts?: object): this is NodePath<t.YieldExpression>;
    isAnyTypeAnnotation(opts?: object): this is NodePath<t.AnyTypeAnnotation>;
    isArrayTypeAnnotation(
      opts?: object
    ): this is NodePath<t.ArrayTypeAnnotation>;
    isBooleanTypeAnnotation(
      opts?: object
    ): this is NodePath<t.BooleanTypeAnnotation>;
    isBooleanLiteralTypeAnnotation(
      opts?: object
    ): this is NodePath<t.BooleanLiteralTypeAnnotation>;
    isNullLiteralTypeAnnotation(
      opts?: object
    ): this is NodePath<t.NullLiteralTypeAnnotation>;
    isClassImplements(opts?: object): this is NodePath<t.ClassImplements>;
    isClassProperty(opts?: object): this is NodePath<t.ClassProperty>;
    isDeclareClass(opts?: object): this is NodePath<t.DeclareClass>;
    isDeclareFunction(opts?: object): this is NodePath<t.DeclareFunction>;
    isDeclareInterface(opts?: object): this is NodePath<t.DeclareInterface>;
    isDeclareModule(opts?: object): this is NodePath<t.DeclareModule>;
    isDeclareTypeAlias(opts?: object): this is NodePath<t.DeclareTypeAlias>;
    isDeclareVariable(opts?: object): this is NodePath<t.DeclareVariable>;
    // isExistentialTypeParam(
    //   opts?: object
    // ): this is NodePath<t.ExistentialTypeParam>;
    isFunctionTypeAnnotation(
      opts?: object
    ): this is NodePath<t.FunctionTypeAnnotation>;
    isFunctionTypeParam(opts?: object): this is NodePath<t.FunctionTypeParam>;
    isGenericTypeAnnotation(
      opts?: object
    ): this is NodePath<t.GenericTypeAnnotation>;
    isInterfaceExtends(opts?: object): this is NodePath<t.InterfaceExtends>;
    isInterfaceDeclaration(
      opts?: object
    ): this is NodePath<t.InterfaceDeclaration>;
    isIntersectionTypeAnnotation(
      opts?: object
    ): this is NodePath<t.IntersectionTypeAnnotation>;
    isMixedTypeAnnotation(
      opts?: object
    ): this is NodePath<t.MixedTypeAnnotation>;
    isNullableTypeAnnotation(
      opts?: object
    ): this is NodePath<t.NullableTypeAnnotation>;
    // isNumericLiteralTypeAnnotation(
    //   opts?: object
    // ): this is NodePath<t.NumericLiteralTypeAnnotation>;
    isNumberTypeAnnotation(
      opts?: object
    ): this is NodePath<t.NumberTypeAnnotation>;
    isStringLiteralTypeAnnotation(
      opts?: object
    ): this is NodePath<t.StringLiteralTypeAnnotation>;
    isStringTypeAnnotation(
      opts?: object
    ): this is NodePath<t.StringTypeAnnotation>;
    isThisTypeAnnotation(opts?: object): this is NodePath<t.ThisTypeAnnotation>;
    isTupleTypeAnnotation(
      opts?: object
    ): this is NodePath<t.TupleTypeAnnotation>;
    isTypeofTypeAnnotation(
      opts?: object
    ): this is NodePath<t.TypeofTypeAnnotation>;
    isTypeAlias(opts?: object): this is NodePath<t.TypeAlias>;
    isTypeAnnotation(opts?: object): this is NodePath<t.TypeAnnotation>;
    isTypeCastExpression(opts?: object): this is NodePath<t.TypeCastExpression>;
    isTypeParameterDeclaration(
      opts?: object
    ): this is NodePath<t.TypeParameterDeclaration>;
    isTypeParameterInstantiation(
      opts?: object
    ): this is NodePath<t.TypeParameterInstantiation>;
    isObjectTypeAnnotation(
      opts?: object
    ): this is NodePath<t.ObjectTypeAnnotation>;
    isObjectTypeCallProperty(
      opts?: object
    ): this is NodePath<t.ObjectTypeCallProperty>;
    isObjectTypeIndexer(opts?: object): this is NodePath<t.ObjectTypeIndexer>;
    isObjectTypeProperty(opts?: object): this is NodePath<t.ObjectTypeProperty>;
    isQualifiedTypeIdentifier(
      opts?: object
    ): this is NodePath<t.QualifiedTypeIdentifier>;
    isUnionTypeAnnotation(
      opts?: object
    ): this is NodePath<t.UnionTypeAnnotation>;
    isVoidTypeAnnotation(opts?: object): this is NodePath<t.VoidTypeAnnotation>;
    isJSXAttribute(opts?: object): this is NodePath<t.JSXAttribute>;
    isJSXClosingElement(opts?: object): this is NodePath<t.JSXClosingElement>;
    isJSXElement(opts?: object): this is NodePath<t.JSXElement>;
    isJSXEmptyExpression(opts?: object): this is NodePath<t.JSXEmptyExpression>;
    isJSXExpressionContainer(
      opts?: object
    ): this is NodePath<t.JSXExpressionContainer>;
    isJSXIdentifier(opts?: object): this is NodePath<t.JSXIdentifier>;
    isJSXMemberExpression(
      opts?: object
    ): this is NodePath<t.JSXMemberExpression>;
    isJSXNamespacedName(opts?: object): this is NodePath<t.JSXNamespacedName>;
    isJSXOpeningElement(opts?: object): this is NodePath<t.JSXOpeningElement>;
    isJSXSpreadAttribute(opts?: object): this is NodePath<t.JSXSpreadAttribute>;
    isJSXText(opts?: object): this is NodePath<t.JSXText>;
    isNoop(opts?: object): this is NodePath<t.Noop>;
    isParenthesizedExpression(
      opts?: object
    ): this is NodePath<t.ParenthesizedExpression>;
    isAwaitExpression(opts?: object): this is NodePath<t.AwaitExpression>;
    isBindExpression(opts?: object): this is NodePath<t.BindExpression>;
    isDecorator(opts?: object): this is NodePath<t.Decorator>;
    isDoExpression(opts?: object): this is NodePath<t.DoExpression>;
    isExportDefaultSpecifier(
      opts?: object
    ): this is NodePath<t.ExportDefaultSpecifier>;
    isExportNamespaceSpecifier(
      opts?: object
    ): this is NodePath<t.ExportNamespaceSpecifier>;
    isRestProperty(opts?: object): this is NodePath<t.RestProperty>;
    isSpreadProperty(opts?: object): this is NodePath<t.SpreadProperty>;
    isExpression(opts?: object): this is NodePath<t.Expression>;
    isBinary(opts?: object): this is NodePath<t.Binary>;
    isScopable(opts?: object): this is NodePath<t.Scopable>;
    isBlockParent(opts?: object): this is NodePath<t.BlockParent>;
    isBlock(opts?: object): this is NodePath<t.Block>;
    isStatement(opts?: object): this is NodePath<t.Statement>;
    isTerminatorless(opts?: object): this is NodePath<t.Terminatorless>;
    isCompletionStatement(
      opts?: object
    ): this is NodePath<t.CompletionStatement>;
    isConditional(opts?: object): this is NodePath<t.Conditional>;
    isLoop(opts?: object): this is NodePath<t.Loop>;
    isWhile(opts?: object): this is NodePath<t.While>;
    isExpressionWrapper(opts?: object): this is NodePath<t.ExpressionWrapper>;
    isFor(opts?: object): this is NodePath<t.For>;
    isForXStatement(opts?: object): this is NodePath<t.ForXStatement>;
    isFunction(opts?: object): this is NodePath<t.Function>;
    isFunctionParent(opts?: object): this is NodePath<t.FunctionParent>;
    isPureish(opts?: object): this is NodePath<t.Pureish>;
    isDeclaration(opts?: object): this is NodePath<t.Declaration>;
    isLVal(opts?: object): this is NodePath<t.LVal>;
    isLiteral(opts?: object): this is NodePath<t.Literal>;
    isImmutable(opts?: object): this is NodePath<t.Immutable>;
    isUserWhitespacable(opts?: object): this is NodePath<t.UserWhitespacable>;
    isMethod(opts?: object): this is NodePath<t.Method>;
    isObjectMember(opts?: object): this is NodePath<t.ObjectMember>;
    isProperty(opts?: object): this is NodePath<t.Property>;
    isUnaryLike(opts?: object): this is NodePath<t.UnaryLike>;
    isPattern(opts?: object): this is NodePath<t.Pattern>;
    isClass(opts?: object): this is NodePath<t.Class>;
    isModuleDeclaration(opts?: object): this is NodePath<t.ModuleDeclaration>;
    isExportDeclaration(opts?: object): this is NodePath<t.ExportDeclaration>;
    isModuleSpecifier(opts?: object): this is NodePath<t.ModuleSpecifier>;
    isFlow(opts?: object): this is NodePath<t.Flow>;
    isFlowBaseAnnotation(opts?: object): this is NodePath<t.FlowBaseAnnotation>;
    isFlowDeclaration(opts?: object): this is NodePath<t.FlowDeclaration>;
    isJSX(opts?: object): this is NodePath<t.JSX>;
    isNumberLiteral(opts?: object): this is NodePath<t.NumericLiteral>;
    isRegexLiteral(opts?: object): this is NodePath<t.RegExpLiteral>;
    isReferencedIdentifier(
      opts?: object
    ): this is NodePath<t.Identifier | t.JSXIdentifier>;
    isReferencedMemberExpression(
      opts?: object
    ): this is NodePath<t.MemberExpression>;
    isBindingIdentifier(opts?: object): this is NodePath<t.Identifier>;
    isScope(opts?: object): this is NodePath<t.Scopable>;
    isReferenced(opts?: object): boolean;
    isBlockScoped(
      opts?: object
    ): this is NodePath<
      t.FunctionDeclaration | t.ClassDeclaration | t.VariableDeclaration
    >;
    isVar(opts?: object): this is NodePath<t.VariableDeclaration>;
    isUser(opts?: object): boolean;
    isGenerated(opts?: object): boolean;
    isPure(opts?: object): boolean;

    // ------------------------- assertXXX -------------------------
    assertArrayExpression(opts?: object): void;
    assertAssignmentExpression(opts?: object): void;
    assertBinaryExpression(opts?: object): void;
    assertDirective(opts?: object): void;
    assertDirectiveLiteral(opts?: object): void;
    assertBlockStatement(opts?: object): void;
    assertBreakStatement(opts?: object): void;
    assertCallExpression(opts?: object): void;
    assertCatchClause(opts?: object): void;
    assertConditionalExpression(opts?: object): void;
    assertContinueStatement(opts?: object): void;
    assertDebuggerStatement(opts?: object): void;
    assertDoWhileStatement(opts?: object): void;
    assertEmptyStatement(opts?: object): void;
    assertExpressionStatement(opts?: object): void;
    assertFile(opts?: object): void;
    assertForInStatement(opts?: object): void;
    assertForStatement(opts?: object): void;
    assertFunctionDeclaration(opts?: object): void;
    assertFunctionExpression(opts?: object): void;
    assertIdentifier(opts?: object): void;
    assertIfStatement(opts?: object): void;
    assertLabeledStatement(opts?: object): void;
    assertStringLiteral(opts?: object): void;
    assertNumericLiteral(opts?: object): void;
    assertNullLiteral(opts?: object): void;
    assertBooleanLiteral(opts?: object): void;
    assertRegExpLiteral(opts?: object): void;
    assertLogicalExpression(opts?: object): void;
    assertMemberExpression(opts?: object): void;
    assertNewExpression(opts?: object): void;
    assertProgram(opts?: object): void;
    assertObjectExpression(opts?: object): void;
    assertObjectMethod(opts?: object): void;
    assertObjectProperty(opts?: object): void;
    assertRestElement(opts?: object): void;
    assertReturnStatement(opts?: object): void;
    assertSequenceExpression(opts?: object): void;
    assertSwitchCase(opts?: object): void;
    assertSwitchStatement(opts?: object): void;
    assertThisExpression(opts?: object): void;
    assertThrowStatement(opts?: object): void;
    assertTryStatement(opts?: object): void;
    assertUnaryExpression(opts?: object): void;
    assertUpdateExpression(opts?: object): void;
    assertVariableDeclaration(opts?: object): void;
    assertVariableDeclarator(opts?: object): void;
    assertWhileStatement(opts?: object): void;
    assertWithStatement(opts?: object): void;
    assertAssignmentPattern(opts?: object): void;
    assertArrayPattern(opts?: object): void;
    assertArrowFunctionExpression(opts?: object): void;
    assertClassBody(opts?: object): void;
    assertClassDeclaration(opts?: object): void;
    assertClassExpression(opts?: object): void;
    assertExportAllDeclaration(opts?: object): void;
    assertExportDefaultDeclaration(opts?: object): void;
    assertExportNamedDeclaration(opts?: object): void;
    assertExportSpecifier(opts?: object): void;
    assertForOfStatement(opts?: object): void;
    assertImportDeclaration(opts?: object): void;
    assertImportDefaultSpecifier(opts?: object): void;
    assertImportNamespaceSpecifier(opts?: object): void;
    assertImportSpecifier(opts?: object): void;
    assertMetaProperty(opts?: object): void;
    assertClassMethod(opts?: object): void;
    assertObjectPattern(opts?: object): void;
    assertSpreadElement(opts?: object): void;
    assertSuper(opts?: object): void;
    assertTaggedTemplateExpression(opts?: object): void;
    assertTemplateElement(opts?: object): void;
    assertTemplateLiteral(opts?: object): void;
    assertYieldExpression(opts?: object): void;
    assertAnyTypeAnnotation(opts?: object): void;
    assertArrayTypeAnnotation(opts?: object): void;
    assertBooleanTypeAnnotation(opts?: object): void;
    assertBooleanLiteralTypeAnnotation(opts?: object): void;
    assertNullLiteralTypeAnnotation(opts?: object): void;
    assertClassImplements(opts?: object): void;
    assertClassProperty(opts?: object): void;
    assertDeclareClass(opts?: object): void;
    assertDeclareFunction(opts?: object): void;
    assertDeclareInterface(opts?: object): void;
    assertDeclareModule(opts?: object): void;
    assertDeclareTypeAlias(opts?: object): void;
    assertDeclareVariable(opts?: object): void;
    assertExistentialTypeParam(opts?: object): void;
    assertFunctionTypeAnnotation(opts?: object): void;
    assertFunctionTypeParam(opts?: object): void;
    assertGenericTypeAnnotation(opts?: object): void;
    assertInterfaceExtends(opts?: object): void;
    assertInterfaceDeclaration(opts?: object): void;
    assertIntersectionTypeAnnotation(opts?: object): void;
    assertMixedTypeAnnotation(opts?: object): void;
    assertNullableTypeAnnotation(opts?: object): void;
    assertNumericLiteralTypeAnnotation(opts?: object): void;
    assertNumberTypeAnnotation(opts?: object): void;
    assertStringLiteralTypeAnnotation(opts?: object): void;
    assertStringTypeAnnotation(opts?: object): void;
    assertThisTypeAnnotation(opts?: object): void;
    assertTupleTypeAnnotation(opts?: object): void;
    assertTypeofTypeAnnotation(opts?: object): void;
    assertTypeAlias(opts?: object): void;
    assertTypeAnnotation(opts?: object): void;
    assertTypeCastExpression(opts?: object): void;
    assertTypeParameterDeclaration(opts?: object): void;
    assertTypeParameterInstantiation(opts?: object): void;
    assertObjectTypeAnnotation(opts?: object): void;
    assertObjectTypeCallProperty(opts?: object): void;
    assertObjectTypeIndexer(opts?: object): void;
    assertObjectTypeProperty(opts?: object): void;
    assertQualifiedTypeIdentifier(opts?: object): void;
    assertUnionTypeAnnotation(opts?: object): void;
    assertVoidTypeAnnotation(opts?: object): void;
    assertJSXAttribute(opts?: object): void;
    assertJSXClosingElement(opts?: object): void;
    assertJSXElement(opts?: object): void;
    assertJSXEmptyExpression(opts?: object): void;
    assertJSXExpressionContainer(opts?: object): void;
    assertJSXIdentifier(opts?: object): void;
    assertJSXMemberExpression(opts?: object): void;
    assertJSXNamespacedName(opts?: object): void;
    assertJSXOpeningElement(opts?: object): void;
    assertJSXSpreadAttribute(opts?: object): void;
    assertJSXText(opts?: object): void;
    assertNoop(opts?: object): void;
    assertParenthesizedExpression(opts?: object): void;
    assertAwaitExpression(opts?: object): void;
    assertBindExpression(opts?: object): void;
    assertDecorator(opts?: object): void;
    assertDoExpression(opts?: object): void;
    assertExportDefaultSpecifier(opts?: object): void;
    assertExportNamespaceSpecifier(opts?: object): void;
    assertRestProperty(opts?: object): void;
    assertSpreadProperty(opts?: object): void;
    assertExpression(opts?: object): void;
    assertBinary(opts?: object): void;
    assertScopable(opts?: object): void;
    assertBlockParent(opts?: object): void;
    assertBlock(opts?: object): void;
    assertStatement(opts?: object): void;
    assertTerminatorless(opts?: object): void;
    assertCompletionStatement(opts?: object): void;
    assertConditional(opts?: object): void;
    assertLoop(opts?: object): void;
    assertWhile(opts?: object): void;
    assertExpressionWrapper(opts?: object): void;
    assertFor(opts?: object): void;
    assertForXStatement(opts?: object): void;
    assertFunction(opts?: object): void;
    assertFunctionParent(opts?: object): void;
    assertPureish(opts?: object): void;
    assertDeclaration(opts?: object): void;
    assertLVal(opts?: object): void;
    assertLiteral(opts?: object): void;
    assertImmutable(opts?: object): void;
    assertUserWhitespacable(opts?: object): void;
    assertMethod(opts?: object): void;
    assertObjectMember(opts?: object): void;
    assertProperty(opts?: object): void;
    assertUnaryLike(opts?: object): void;
    assertPattern(opts?: object): void;
    assertClass(opts?: object): void;
    assertModuleDeclaration(opts?: object): void;
    assertExportDeclaration(opts?: object): void;
    assertModuleSpecifier(opts?: object): void;
    assertFlow(opts?: object): void;
    assertFlowBaseAnnotation(opts?: object): void;
    assertFlowDeclaration(opts?: object): void;
    assertJSX(opts?: object): void;
    assertNumberLiteral(opts?: object): void;
    assertRegexLiteral(opts?: object): void;
  }

  export class Hub {
    constructor(file: any, options: any);
    file: any;
    options: any;
  }

  export interface TraversalContext {
    parentPath: NodePath;
    scope: Scope;
    state: any;
    opts: any;
  }
}
